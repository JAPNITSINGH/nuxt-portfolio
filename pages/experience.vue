<script setup>
useHead({
  title: 'Experience',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.experience') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software Developer - NovaHire
          </h4>
          <span>April 2025 — Present</span>
          <p class="timeline-item-desc">
            Florida, USA
          </p>
          <p class="timeline-text">
            Focused on enhancing developer productivity and system reliability by 
            resolving critical defects, automating regression testing, and optimizing 
            CI/CD workflows. I also implemented Infrastructure as Code with Terraform 
            and deployed containerized microservices with Docker, which improved 
            scalability, reduced manual errors, and streamlined cloud resource 
            management
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Student - University of Rochester
          </h4>
          <span>August 2023 — December 2024</span>
          <p class="timeline-item-desc">
            New York, USA
          </p>
          <p class="timeline-text">
            In Rochester, I deepened my technical expertise through challenging 
            coursework and hands-on projects in systems, machine learning, and cloud 
            computing. Beyond academics, I enjoyed the city’s quiet charm, collaborative 
            campus life, and opportunities for growth through research and networking.
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Senior Software Developer - Accolite Digital
          </h4>
          <span>January 2021  — August 2023</span>
          <p class="timeline-item-desc">
            Hyderabad, India
          </p>
          <p class="timeline-text">
            Led multiple backend and cloud-focused projects, including CI/CD 
            integrations, Redshift development, and cloud infrastructure for 
            high-traffic applications. Managed cross-functional teams to deliver 
            scalable, secure, and performance-optimized solutions across diverse 
            platforms.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Junior Software Developer - Accolite Digital
          </h4>
          <span>September 2020  — December 2020</span>
          <p class="timeline-item-desc">
            Hyderabad, India
          </p>
          <p class="timeline-text">
            Contributed to the development of offline web capabilities and enhanced 
            database tools using Java, C++, and Ruby on Rails. Improved usability and 
            reliability through automation, migration tools, and testing frameworks.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software Engineering Inten - Accolite Digital
          </h4>
          <span>January 2020  — August 2020</span>
          <p class="timeline-item-desc">
            Hyderabad, India
          </p>
          <p class="timeline-text">
            I developed a Router class in LansaIDE using C/C++, enabling more efficient
            routing for RDMLX-based web applications. I also resolved critical issues in
            an online text editor by addressing SQL server compatibility and Angular
            framework build challenges, improving overall functionality and stability.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Inten - Orbcomm
          </h4>
          <span>May 2019  — July 2019</span>
          <p class="timeline-item-desc">
            Hyderabad, India
          </p>
          <p class="timeline-text">
            Developed automation scripts in Bash and Batch to streamline software 
            installation on hardware devices used for machine-to-machine communication. 
            Enhanced developer productivity by simplifying deployment processes and added 
            a custom context menu feature for seamless software installation on connected 
            tracking hardware. This work contributed to the efficiency and reliability of 
            ORBCOMM’s mobile asset monitoring solutions.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Student - Manipal University
          </h4>
          <span>May 2016  — August 2020</span>
          <p class="timeline-item-desc">
            Manipal, India
          </p>
          <p class="timeline-text">
            My time in Manipal was both academically enriching and personally 
            transformative. I gained a solid foundation in computer science while 
            immersing myself in a vibrant campus culture that encouraged innovation, 
            self-learning, and close-knit community bonding.
          </p>
        </li>

      </ol>
    </section>

    <!-- <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

      </ul>
    </section> -->
  </article>
</template>
