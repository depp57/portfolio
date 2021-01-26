import {AfterViewInit, Component} from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {

  private readonly robotSize = 50;
  private robotOrdinate = 0;

  constructor() {}

  ngAfterViewInit(): void {
    const tabs = document.getElementById('navButtonsColumn')!.getElementsByTagName('button');

    setTimeout(() => {
      this.initRobot(tabs[0]);

      // Add the listeners to the tabs
      for (const tab of tabs) {
        const ordinate = tab.getBoundingClientRect().y;
        tab.addEventListener('click', () => this.animateRobot(ordinate));
      }

    }, 0); // TODO https://stackoverflow.com/a/37915368
  }

  initRobot(firstTab: HTMLElement): void {
    const robot = document.getElementById('navRobot');
    if (robot !== null) {
      robot.style.transform = `translateY(${firstTab.getBoundingClientRect().y - (this.robotSize / 2)}px)`;
      robot.style.transform += 'rotateZ(90deg)';
      robot.style.width = `${this.robotSize}px`;
      robot.style.height = `${this.robotSize + 36}px`;
    }
  }

  private animateRobot(ordinate: number): void {
    if (this.robotOrdinate === ordinate) { return; }

    anime({
      targets: ['#navRobot'],
      keyframes: [
        {rotateZ: this.robotOrdinate > ordinate ? 180 : 0},
        {translateY: ordinate - (this.robotSize / 2)},
        {rotateZ: 90}
      ],

      easing: 'easeInOutSine'
    });

    this.robotOrdinate = ordinate;
  }

  private initRobotTireTrack = () => { // TODO avec flamme trace !
    // const colorString = window.getComputedStyle(document.getElementById('navContainer')).backgroundColor;
    // const rgbStr = colorString.replace(/(\D)+/g, ';').split(';').filter(value => value !== '');
    // const darken = (pixel) =>  Math.pow(pixel, 1.12) - 1.2 * pixel;
    // const rgb = rgbStr.map(pixel => darken(parseInt(pixel, 10)));
    // const track = document.getElementById('tireTrack');
    // track.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }
}
