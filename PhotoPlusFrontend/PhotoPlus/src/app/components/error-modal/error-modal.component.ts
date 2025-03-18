import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit, AfterViewInit {

  @Input() public message: string;

  @Input() public title: string;

  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // Make sure the modal can be closed with Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }

  ngAfterViewInit(): void {
    // Focus might help with accessibility
    setTimeout(() => {
      if (this.closeBtn) {
        this.closeBtn.nativeElement.focus();
      }
    }, 100);
  }

  close() {
    console.log('Close button clicked');
    this.activeModal.close();
  }

}
