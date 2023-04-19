import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdash',
  templateUrl: './cdash.component.html',
  styleUrls: ['./cdash.component.css']
})
export class CdashComponent {
  constructor(private router: Router) {}

  goToPayments() {
    this.router.navigateByUrl('/payment');
  }

  goToTransactions() {
    this.router.navigateByUrl('/paymentsent');
  }
  onlogClick(){
    // Navigate to /products page
    alert("Logging out!!");
    this.router.navigate(['/']);
  }
  onreClick(){
    this.router.navigate(['/balance']);
  }
}
