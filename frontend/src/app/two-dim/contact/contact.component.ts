import {AfterViewInit, Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import {NgForm} from '@angular/forms';
import anime from 'animejs';
import {EmailMeService} from './email-me.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  constructor(private messageService: MessageService, private emailMeService: EmailMeService) {}

  ngAfterViewInit(): void {
    const robot = document.getElementById('robot-left');
    robot!.style.transform += `rotateZ(180deg)`;

    this.addFooterAnimation();
    this.startAnimation();
  }

  private addFooterAnimation(): void {
    const footerSocialText = document.getElementById('footer-social-text');

    document.querySelectorAll('.js-footer-social-hover').forEach(elem => {
      elem.addEventListener('mouseover', () => footerSocialText!.classList.add('is-hovered'));
      elem.addEventListener('mouseout', () => footerSocialText!.classList.remove('is-hovered'));
    });
  }

  startAnimation(): void {
    const contactContainer = document.getElementById('contact-container');
    const halfContainerHeight = contactContainer!.getBoundingClientRect().height / 2 + 44; // TODO WHY 44 ?
    const robotLeft = document.getElementById('robot-left');
    const robotRight = document.getElementById('robot-right');
    const robotHeight = robotLeft!.getBoundingClientRect().height;
    const footerSocialLinks = document.querySelectorAll('.footer-social-link, #footer-social-text');

    anime({
      targets: [robotLeft, robotRight],
      translateY: -halfContainerHeight + robotHeight / 2,
      easing: 'linear',
      delay: 250,
      duration: 1000,
      complete: () => {
        robotLeft!.style.backgroundImage = 'url(assets/img/robotRed.svg)';
        robotLeft!.style.width = '50px';
        robotRight!.style.backgroundImage = 'url(assets/img/robotBlue.svg)';
        robotRight!.style.width = '50px';
        robotRight!.style.left = '0';
        footerSocialLinks!.forEach(elem => elem.classList.add('relativePosition'));
      }
    });

    anime({
      targets: ['#contact-overlay'],
      top: '50%',
      height: 0,
      easing: 'linear',
      delay: 250,
      duration: 1000
    });
  }

  onSubmit(form: NgForm): void {
    if (this.emailMeService.hasAlreadySentEmail()) {
      this.messageService.add({
        severity: 'error',
        summary: 'The message was not send',
        detail: 'Sorry, it appears that you have already contacted me today',
        life: 2500
      });
      form.resetForm();
    }
    else {
      const name = form.value['name'];
      this.emailMeService.sendEmail(form.value['email'], form.value['message'], name)
        .then(_ => {
          form.resetForm();
          this.showContactSuccess(name);
        })
        .catch(_ => this.showContactError());
    }
  }

  showContactSuccess(name: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Message send',
      detail: `Thanks ${name} 🙌`,
      life: 1600
    });
  }

  showContactError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'The message was not send',
      detail: 'Please, verify your internet connection',
      life: 2500
    });
  }
}
