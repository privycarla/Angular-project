import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment',
  imports: [RouterModule],
  template: `
  <div class="w-full h-screen bg-orange-50 flex flex-col">

      <!-- Top Bar -->
      <div class="h-36 bg-amber-300 flex items-end justify-center pb-14">
        <span class="text-white text-2xl font-extrabold font-['Poppins']">APPOINTMENT</span>
      </div>

      <!-- Appointment Card -->
      <div class="flex-grow flex items-center justify-center pb-12">
        <div class="w-80 h-96 bg-yellow-200 rounded-[20px] border border-yellow-600 overflow-hidden">
          
          <!-- Card Header -->
          <div class="bg-zinc-300 h-16 flex items-center px-4 space-x-3 rounded-t-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 7V3h2v4h4V3h2v4h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1zm0 6h8v2H8v-2z"/>
            </svg>
            <div>
              <div class="text-sm font-semibold text-zinc-800 font-['Poppins']">Facial Glow</div>
              <div class="text-[10px] text-zinc-600 font-['Poppins']">May 30, 2025 - 10:00 am</div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="flex-1 p-4">
            <!-- You can place more details here later -->
          </div>
        </div>
      </div>

    

    <!-- Bottom Navigation Bar -->
    <div class="fixed bottom-0 w-full h-16 bg-amber-300 flex justify-around items-center rounded-t-2xl">
    <!-- Home -->
    <button routerLink="/home">
      <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-lime-800 fill-current"
          viewBox="0 0 20 20">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </button>

    <!-- Search -->
    <button routerLink="/explore">
      <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-lime-800"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>

    <!-- Booking/Calendar -->
    <button routerLink="/appointment">
      <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-lime-800"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z"/>
      </svg>
    </button>

    <!-- Profile -->
    <button>
      <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-lime-800"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
      </svg>
    </button>
  </div>

  </div>`,
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

}
