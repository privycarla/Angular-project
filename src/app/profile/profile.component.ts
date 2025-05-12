import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="w-full min-h-screen bg-orange-50 flex flex-col items-center font-poppins pb-16">
      <!-- Header -->
      <div class="w-full bg-yellow-600 px-6 pt-12 pb-6">
        <div class="flex justify-between items-center">
          <!-- Profile image + name + username -->
          <div class="flex items-center space-x-4">
            <img src="assets/nami.jpg"
                 class="w-16 h-16 rounded-full border-4 border-yellow-600" />
            <div>
              <h1 class="text-black font-semibold text-base">Nami Swan</h1>
              <p class="text-stone-700 text-sm font-semibold">&#64;catburglar</p>
            </div>
          </div>
          <!-- Edit profile button -->
          <button class="px-5 py-1 text-sm font-semibold bg-zinc-300 text-lime-700 rounded-full shadow-sm">
            Edit profile
          </button>
        </div>
      </div>

      <!-- Menu Section -->
      <div class="mt-12 w-full max-w-md px-4 space-y-4">
        <!-- Profile Option Cards -->
        <div class="bg-amber-200 rounded-2xl p-4 space-y-4">
          <!-- Profile -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Profile</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <!-- Bookings -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Bookings</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <!-- Payment Method -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4 4h16a2 2 0 012 2v3H2V6a2 2 0 012-2zm0 7h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7zm4 4h4" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Payment Method</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <!-- Settings -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.59.997c.829-.484 1.846.38 1.528 1.264a1.724 1.724 0 001.134 2.221c.89.25.89 1.54 0 1.79a1.724 1.724 0 00-1.134 2.22c.318.885-.699 1.75-1.528 1.266a1.724 1.724 0 00-2.59.996c-.3.922-1.603.922-1.902 0a1.724 1.724 0 00-2.59-.996c-.83.484-1.846-.381-1.528-1.266a1.724 1.724 0 00-1.134-2.22c-.89-.25-.89-1.54 0-1.79a1.724 1.724 0 001.134-2.221c-.318-.884.698-1.748 1.528-1.264a1.724 1.724 0 002.59-.997z" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Settings</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Help Section -->
        <div class="bg-amber-200 rounded-2xl p-4 space-y-4">
          <!-- Help Center -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Help Center</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <!-- Chat -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.962 1.606l1.179 5.5A2 2 0 0119 20H5a2 2 0 01-1.905-2.645l1.178-5.5A2 2 0 016.236 10H11" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Chat with aimaGlow</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Account Section -->
        <div class="bg-amber-200 rounded-2xl p-4 space-y-4">
          <!-- Log out -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Log out</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <!-- Delete account -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-lime-800" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-zinc-500 text-xs font-semibold">Delete account</span>
            </div>
            <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <nav class="fixed bottom-0 left-0 w-full h-16 bg-amber-300 flex justify-around items-center rounded-t-2xl shadow-md z-10">
        <a routerLink="/home" class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="w-6 h-6 text-lime-800 fill-current"
               viewBox="0 0 20 20">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <a routerLink="/explore" class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="w-6 h-6 text-lime-800"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </a>
        <a routerLink="/appointment" class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="w-6 h-6 text-lime-800"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10m-10 4h6m4-10H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2z"/>
          </svg>
        </a>
        <a routerLink="/profile" class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="w-6 h-6 text-lime-800"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
        </a>
      </nav>
    </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {}
