import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class NewComponent {

  successId: number | null = null;
  form!: FormGroup;   

  constructor(
    private fb: FormBuilder,
    private api: SeriesService,
    private router: Router
  ) {
    
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      channel: ['', [Validators.required]],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    this.api.create(this.form.getRawValue() as any).subscribe({
      next: (resp) => {
        this.successId = resp?.id ?? null;
        setTimeout(() => this.router.navigateByUrl('/home'), 1200);
      }
    });
  }
}
