<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/logo-3.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Japnit Singh Ahluwalia">
          Japnit Singh <br> Ahluwalia
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Software Developer</span>
          <span>Web Developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/japnit-singh-ahluwalia/" class="contact-link" target="_blank">Japnit Singh <br> Ahluwalia</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/JAPNITSINGH" class="contact-link" target="_blank">JAPNITSINGH</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="call-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Phone
            </p>

            <a class="contact-link">+1 (585) 530-0728</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:japnitsinghahluwalia@gmail.com" class="contact-link">japnitsinghahluwalia@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Alternate Email
            </p>

            <a href="mailto:truejswalia@gmail.com" class="contact-link">truejswalia@gmail.com</a>
          </div>
        </li>

      </ul>

      <div class="separator" />
    </div>
  </aside>
</template>
