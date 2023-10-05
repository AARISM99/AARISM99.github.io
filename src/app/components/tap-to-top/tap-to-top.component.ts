import { Component } from '@angular/core';

@Component({
  selector: 'app-tap-to-top',
  templateUrl: './tap-to-top.component.html',
  styleUrls: ['./tap-to-top.component.scss']
})
export class TapToTopComponent {

  tapToTopBtn!: HTMLElement;

  constructor() {
    window.onscroll = () => this.scrollFunction();
    // this.tapToTopBtn = document.getElementById("tap_to_top") as HTMLElement;
    document.addEventListener("DOMContentLoaded", () => {
      this.tapToTopBtn = document.getElementById("tap_to_top") as HTMLElement;
      // Now you can safely access and manipulate the element
      if (this.tapToTopBtn) {
        // Your code here
      }
    });
  }

  scrollFunction() {
    // console.log(this.tapToTopBtn);
    // console.log("scroll function called");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.tapToTopBtn.style.display = "block";
    }
    else {
      this.tapToTopBtn.style.display = "none";
    }
    // console.log(this.tapToTopBtn);
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
