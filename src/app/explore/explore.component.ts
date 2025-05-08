import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [RouterModule],
  template: `
  <div class="w-full min-h-screen bg-stone-200 relative overflow-hidden">
    <!-- Top Header -->
    <div class="w-full h-40 bg-amber-300 relative flex flex-col items-start justify-center px-4 pt-3">
    
        <div class="w-full flex items-center bg-zinc-300 rounded-full h-12 px-4 mt-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-neutral-500 mr-3" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            
            <!-- Explore Text -->
            <span class="text-neutral-500 text-base font-semibold">E</span>
        
         </div> 
    </div>

    
 <!-- Scrollable Container -->
<div class="absolute top-[200px] left-[42px] w-80 h-[530px] overflow-y-scroll scrollbar-hide pb-27">
  <div class="space-y-6">
    
    <!-- Title -->
    <div class="text-black text-2xl font-semibold font-['Poppins'] mb-2">Results(1003)</div>

    <!-- Service Card 1 -->
    <div class="mb-6">
      <img class="w-73 h-40 rounded-[40px]" src="assets/er.jpg" />
      <div class="pl-4">
        <div class="text-black text-xs font-semibold font-['Poppins'] mt-2">Eyebrow Shaping</div>
        <div class="text-lime-600 text-[8.86px] font-semibold font-['Poppins']">AimaGlow Recommended</div>
      </div>
    </div>

    <!-- Service Card 2 -->
    <div class="mb-6">
      <img class="w-73 h-40 rounded-[40px]" src="assets/er.jpg" />
      <div class="pl-4">
        <div class="text-black text-xs font-semibold font-['Poppins'] mt-2">Nail Extensions</div>
        <div class="text-lime-600 text-[8.86px] font-semibold font-['Poppins']">AimaGlow Recommended</div>
      </div>
    </div>

    <!-- Service Card 3 -->
    <div class="mb-6">
      <img class="w-73 h-40 rounded-[40px]" src="assets/er.jpg" />
      <div class="pl-4">
        <div class="text-black text-xs font-semibold font-['Poppins'] mt-2">Nail Extensions</div>
        <div class="text-lime-600 text-[8.86px] font-semibold font-['Poppins']">AimaGlow Recommended</div>
      </div>
    </div>

    <!-- Service Card 4 -->
    <div class="mb-6">
      <img class="w-73 h-40 rounded-[40px]" src="assets/er.jpg" />
      <div class="pl-4">
        <div class="text-black text-xs font-semibold font-['Poppins'] mt-2">Nail Extensions</div>
        <div class="text-lime-600 text-[8.86px] font-semibold font-['Poppins']">AimaGlow Recommended</div>
      </div>
    </div>

    <!-- Add more cards below as needed -->
    
  </div>
</div>


    <!-- Bottom Navigation -->
  <!-- Bottom Navigation -->
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
    <button>
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


  </div>
`,
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
