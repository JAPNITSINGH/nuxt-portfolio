<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
// const { data: testimonials } = await useFetch('/api/testimonials')

// const testimonialItem = ref({})
// const activeModal = ref(false)
// const activeOverlay = ref(false)

// function showTestimonial(id) {
//   testimonialItem.value = testimonials.value.find(item => item.id === id)
//   activeModal.value = true
//   activeOverlay.value = true
// }

// function closeTestimonaial() {
//   testimonialItem.value = {}
//   activeModal.value = false
//   activeOverlay.value = false
// }
/* Testimonials */

// /* Services */
// const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <!-- clients and skills -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Skills
      </h3>

      <ul class="skills-grid">
        <li class="skill-item">
          <img src="/images/Java.png" alt="Java" />
          <p class="skill-name">Java</p>
        </li>
        <li class="skill-item">
          <img src="/images/Cpp.png" alt="C/C++" />
          <p class="skill-name">C/C++</p>
        </li>
        <li class="skill-item">
          <img src="/images/TypeScript.png" alt="TypeScript" />
          <p class="skill-name">TypeScript</p>
        </li>
        <li class="skill-item">
          <img src="/images/Python.png" alt="Python" />
          <p class="skill-name">Python</p>
        </li>
        <li class="skill-item">
          <img src="/images/SQL.png" alt="SQL" />
          <p class="skill-name">SQL</p>
        </li>
        <li class="skill-item">
          <img src="/images/Ruby.png" alt="Ruby" />
          <p class="skill-name">Ruby</p>
        </li>
        <li class="skill-item">
          <img src="/images/C-sharp.png" alt="C#" />
          <p class="skill-name">C#</p>
        </li>
        <li class="skill-item">
          <img src="/images/R.png" alt="R" />
          <p class="skill-name">R</p>
        </li>
        <li class="skill-item">
          <img src="/images/PHP.png" alt="PHP" />
          <p class="skill-name">PHP</p>
        </li>
        <li class="skill-item">
          <img src="/images/Rust.png" alt="Rust" />
          <p class="skill-name">Rust</p>
        </li>
        <li class="skill-item">
          <img src="/images/JavaScript.png" alt="JavaScript" />
          <p class="skill-name">JavaScript</p>
        </li>
        <li class="skill-item">
          <img src="/images/Objective-C.png" alt="Objective-C" />
          <p class="skill-name">Objective-C</p>
        </li>
        <li class="skill-item">
          <img src="/images/React.png" alt="React" />
          <p class="skill-name">React</p>
        </li>
        <li class="skill-item">
          <img src="/images/AmazonRedshift.png" alt="Amazon Redshift" />
          <p class="skill-name">Amazon Redshift</p>
        </li>
        <li class="skill-item">
          <img src="/images/Springboot.png" alt="Spring Boot" />
          <p class="skill-name">Spring Boot</p>
        </li>
        <li class="skill-item">
          <img src="/images/DotNet.png" alt=".NET" />
          <p class="skill-name">.NET</p>
        </li>
        <li class="skill-item">
          <img src="/images/Blazor.png" alt="Blazor" />
          <p class="skill-name">Blazor</p>
        </li>
        <li class="skill-item">
          <img src="/images/RubyOnRails.png" alt="Ruby on Rails" />
          <p class="skill-name">Ruby on Rails</p>
        </li>
        <li class="skill-item">
          <img src="/images/Angular.png" alt="Angular" />
          <p class="skill-name">Angular</p>
        </li>
        <li class="skill-item">
          <img src="/images/Git.png" alt="Git" />
          <p class="skill-name">Git</p>
        </li>
        <li class="skill-item">
          <img src="/images/Spark.png" alt="Spark" />
          <p class="skill-name">Spark</p>
        </li>
        <li class="skill-item">
          <img src="/images/NumPy.png" alt="NumPy" />
          <p class="skill-name">NumPy</p>
        </li>
        <li class="skill-item">
          <img src="/images/Vue.js.png" alt="Vue.js" />
          <p class="skill-name">Vue.js</p>
        </li>
        <li class="skill-item">
          <img src="/images/Kotlin.png" alt="Kotlin" />
          <p class="skill-name">Kotlin</p>
        </li>
        <li class="skill-item">
          <img src="/images/Node.js.png" alt="Node.js" />
          <p class="skill-name">Node.js</p>
        </li>
        <li class="skill-item">
          <img src="/images/AWS.png" alt="AWS" />
          <p class="skill-name">AWS</p>
        </li>
        <li class="skill-item">
          <img src="/images/Docker.png" alt="Docker" />
          <p class="skill-name">Docker</p>
        </li>
        <li class="skill-item">
          <img src="/images/Terraform.png" alt="Terraform" />
          <p class="skill-name">Terraform</p>
        </li>
        <li class="skill-item">
          <img src="/images/Mongodb.png" alt="MongoDB" />
          <p class="skill-name">MongoDB</p>
        </li>
        <li class="skill-item">
          <img src="/images/Cassandra.png" alt="Cassandra" />
          <p class="skill-name">Cassandra</p>
        </li>
        <li class="skill-item">
          <img src="/images/BitBucket.png" alt="BitBucket" />
          <p class="skill-name">BitBucket</p>
        </li>
        <li class="skill-item">
          <img src="/images/Postman.png" alt="Postman" />
          <p class="skill-name">Postman</p>
        </li>
        <li class="skill-item">
          <img src="/images/Swagger.png" alt="Swagger" />
          <p class="skill-name">Swagger</p>
        </li>
        <li class="skill-item">
          <img src="/images/Jenkins.png" alt="Jenkins" />
          <p class="skill-name">Jenkins</p>
        </li>
        <li class="skill-item">
          <img src="/images/GitLab.png" alt="GitLab" />
          <p class="skill-name">GitLab</p>
        </li>
        <li class="skill-item">
          <img src="/images/Bamboo.png" alt="Bamboo" />
          <p class="skill-name">Bamboo</p>
        </li>
              

      </ul>
    </section>
  </article>
</template>