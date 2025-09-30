import { Component, signal } from '@angular/core';
import { Nav } from "../../layout/nav/nav";
import { Register } from "../account/register/register";

@Component({
  selector: 'app-home',
  imports: [Nav, Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected registerMode = signal(false);

  showRegisterMode(): void {
    this.registerMode.set(true);
  }
}
