import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  template: `
  <div class="w-full min-h-screen bg-orange-50 font-['Poppins']">

  <!-- Header background -->
  <div class="w-full h-24 bg-amber-300"></div>

  <!-- Profile Header -->
  <div class="relative">
    <div class="w-[80%] sm:w-[70%] md:w-[60%] mx-auto bg-amber-300 rounded-[30px] mt-[-60px] p-4 flex justify-center items-center flex-col text-white">
      <img class="w-24 h-24 rounded-full mb-4" src="https://placehold.co/100x100" alt="Profile Image" />
      <div class="text-xl font-semibold text-black">Nami Swan</div>
      <div class="text-xs text-stone-700">&#64;catburglar</div>
      <button class="mt-4 bg-zinc-300 text-lime-700 font-semibold py-2 px-4 rounded-full">Edit Profile</button>
    </div>
  </div>

  <!-- Menu Cards -->
  <div class="mx-auto mt-8 w-[90%] sm:w-[80%] md:w-[60%]">
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"></path>
        </svg>
        <span>Profile</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z"></path>
        </svg>
        <span>Bookings</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
        </svg>
        <span>Payment Method</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        </svg>
        <span>Settings</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Help Center</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <span>Chat with aimaGlow</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        <span>Log out</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
    <div class="bg-amber-100 rounded-[20px] p-4 mb-6 flex justify-between items-center">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-lime-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"></path>
        </svg>
        <span>Delete Account</span>
      </div>
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <div class="fixed bottom-0 w-full h-16 bg-amber-300 flex justify-around items-center rounded-t-2xl">
    <button routerLink="/home">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-lime-800 fill-current" viewBox="0 0 20 20">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    </button>

    <button routerLink="/explore">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-lime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>

    <button routerLink="/appointment">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-lime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z"/>
      </svg>
    </button>

    <button routerLink="/profile">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-lime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
      </svg>
    </button>
  </div>
</div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {}
