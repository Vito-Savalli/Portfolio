<template>
  <header class="header">
    <a href="#" class="logo">Vito Savalli</a>
    <div class="bx bx-menu" ref="menuIcon"></div>
    <nav class="navbar" ref="navbar">
      <a href="#home" @click.prevent="smoothScroll('home')" class="active"
        >Home</a
      >
      <a href="#about" @click.prevent="smoothScroll('about')">About</a>
      <a href="#services" @click.prevent="smoothScroll('services')"
        >Expertise
      </a>
      <a href="#portfolio" @click.prevent="smoothScroll('portfolio')"
        >Projects</a
      >
      <a href="#contact" @click.prevent="smoothScroll('contact')">Contact</a>
      <ColorControl @colorChanged="handleColorChange" />
    </nav>
  </header>

  <section class="home" ref="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1 class="vito">Vito Savalli</h1>
      <h3>And I'm a <span class="multiple-text" ref="multipleText"></span></h3>
      <p>
        I'm a passionate JavaScript developer with a strong focus on creative
        design. For me, it's not just about writing lines of code,
        <br />
        it's about bringing a digital vision to life.
      </p>
      <div class="social-media">
        <a href="https://www.linkedin.com/in/vito-savalli/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            class="iLink"
          >
            <path
              d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
            ></path></svg
        ></a>
        <a href="https://github.com/Vito-Savalli" class="Igit"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            class="iGit"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
            ></path></svg
        ></a>
        <a href="https://www.linkedin.com/in/vito-savalli/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            class="iInsta"
          >
            <path
              d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
            ></path></svg
        ></a>
        <a href="https://www.linkedin.com/in/vito-savalli/" class="Ifbk"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            class="iFbk"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
            ></path></svg
        ></a>
      </div>
      <a
        href="/public/Vito-Savalli-CV-JavaScript.pdf"
        target="_blank"
        class="btn"
        >Consult resume</a
      >
    </div>
    <div class="home-img">
      <div class="img"></div>
      <ThreeDModelTest ref="threeDModelTestRef" />
    </div>
  </section>

  <section class="about" ref="about">
    <div class="about-img">
      <div class="hexaShape">
        <img class="about-imgBis" src="../assets/images/home.png" alt="" />
      </div>
    </div>
    <div class="about-content">
      <h2 class="heading">About <span>Me</span></h2>
      <h3>Frontend Developer!</h3>
      <p>
        From Amsterdam, I design user interfaces that not only look good but
        also feel right. <br />
        My familiarity with Web Vitals ensures that performance, accessibility,
        and SEO consistently operate at their peak. <br />
        While my expertise is rooted in frontend JS development, I'm also adept
        with backend technologies like Python, PHP, and Node.js, enabling me to
        craft server-side solutions and automation programs.
      </p>
      <div class="about-stack"></div>
    </div>
  </section>

  <section class="portfolio" ref="services">
    <h2 class="heading">My <span>Expertise</span></h2>
    <div class="portfolio-container">
      <div class="portfolio-box portfolio-box-web">
        <img src="../assets/images/expertise-js.png" alt="" />
        <div class="portfolio-layer">
          <h4>
            JavaScript <br />
            Development
          </h4>
          <p>
            JavaScript expert with a focus on Vue.js. Delivering seamless,
            dynamic web experiences.
          </p>
        </div>
      </div>
      <div class="portfolio-box portfolio-box-ux">
        <img src="../assets/images/expertise-ux.png" alt="" />
        <div class="portfolio-layer">
          <h4>
            UX <br />
            Engineering
          </h4>
          <p>
            Skilled in UX, crafting intuitive and user-centric designs.
            Passionate about efficient and engaging interfaces.
          </p>
        </div>
      </div>
      <div class="portfolio-box portfolio-box-lead">
        <img src="../assets/images/expertise-com.png" alt="" />
        <div class="portfolio-layer">
          <h4>
            Integrative <br />
            Communication
          </h4>
          <p>
            Seamlessly bridging design, development, backend teams, and client
            needs to deliver cohesive web solutions.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="services" ref="portfolio">
    <h2 class="heading">Selected<span> Projects</span></h2>
    <div class="services-container">
      <!-- ... your service boxes ... -->
      <div
        class="services-box ncCont"
        @mouseenter="playVideoNc"
        @mouseleave="pauseVideoNc"
      >
        <div class="services-img">
          <img class="ncImg" src="../assets/images/network.png" alt="" />
          <video
            class="ncVideo"
            src="../assets/images/nc.webm"
            autoplay
            muted
            loop
            alt=""
            ref="videoElementNc"
          />
        </div>
        <i class="bx bx-code-alt"></i>
        <h3>Network Circle</h3>
        <p>
          Newtwork Circle Website built with Vue3 and Vite.js. <br />
          Connected to Salesforce API.
        </p>
        <a
          href="https://www.networkcircle.com/"
          target="__blank"
          class="btn btnFolio"
          >Visit</a
        >
      </div>

      <div
        class="services-box jurisCont"
        @mouseover="playVideoJ"
        @mouseout="pauseVideoJ"
      >
        <div class="services-img">
          <video
            class="jurisVideo"
            src="../assets/images/juris.webm"
            autoplay
            muted
            loop
            alt=""
            ref="videoElementJ"
          />
        </div>
        <h3>Juris Graphia</h3>
        <p>
          Custom WordPress theme of Juris Graphia design agency. <br />
          Theme built with PHP, HTML, CSS and GSAP.
        </p>
        <a href="https://jurisgraphia.fr/" target="__blank" class="btn btnFolio"
          >Visit</a
        >
      </div>

      <div class="services-box">
        <div class="services-img posToFix">
          <img src="../assets/images/raph.png" alt="" />
          <img class="raphGif" src="../assets/images/raph.gif" alt="" />
        </div>
        <h3>Raphaelle Studio</h3>
        <p>
          Raphaelle is a freelance photographer in Amsterdam. <br />
          Website built with Squarespace, custom CSS and SEO plugin.
        </p>
        <a
          href="https://raphaellehugues.com/"
          target="__blank"
          class="btn btnFolio"
          >Visit</a
        >
      </div>

      <div
        class="services-box inkbCont"
        @mouseenter="playVideo"
        @mouseleave="pauseVideo"
      >
        <div class="services-img">
          <img class="inkbImg" src="../assets/images/ink.png" alt="" />
          <video
            class="inkbVideo"
            src="../assets/images/inkb.webm"
            autoplay
            muted
            loop
            alt=""
            ref="videoElement"
          />
        </div>
        <h3>Inkbranders</h3>
        <p>
          Inkbranders is a fictional digital agency specialized in tattoo
          studio.
          <br />
          Website built with Vue3 and Vite.js.
        </p>
        <a href="#" target="__blank" class="btn btnFolio">Visit</a>
      </div>
    </div>
  </section>

  <section class="contact" ref="contact">
    <div
      class="confetti"
      v-bind:style="{ display: showConfetti ? 'flex' : 'none' }"
    >
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
      <div class="confetti-piece"></div>
    </div>
    <h2 class="heading">Contact <span>Me!</span></h2>
    <form @submit.prevent="handleSubmit">
      <div class="input-box">
        <input type="text" v-model="fullName" placeholder="Full Name" />
        <input
          type="email"
          v-model="emailAddress"
          placeholder="Email Address"
        />
      </div>
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <input
        type="submit"
        :value="buttonText"
        class="btn"
        :disabled="isSubmitted"
      />
    </form>
  </section>

  <footer class="footer">
    <div class="footerCta">
      <a href="tel:+33660696138">Let's Speak Today!</a>
    </div>
    <div class="footerContact">
      <div>
        <a href="tel:+33660696138">+336 60 69 61 38</a>
      </div>
      <div>
        <a href="mailto:vitosavalli.dev@gmail.com">vitosavalli.dev@gmail.com</a>
      </div>
    </div>

    <p class="footerCopy">
      Copyright &copy; 2023 by Vito SAVALLI | All Rights Reserved.
    </p>
  </footer>
</template>

<script>
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import ThreeDModelTest from "@/components/ThreeDModelTest.vue";
import ColorControl from "@/components/ColorControl.vue";

export default {
  name: "Portfolio",
  components: { ThreeDModelTest, ColorControl },
  data() {
    return {
      menuIcon: null,
      navbar: null,
      sections: null,
      navLinks: null,
      fullName: "",
      emailAddress: "",
      message: "",
      buttonText: "Send Message",
      showConfetti: false,
      isSubmitted: false,
    };
  },
  mounted() {
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3000);
    this.menuIcon = this.$refs.menuIcon;
    this.navbar = this.$refs.navbar;
    this.sections = this.$refs.sections;
    this.navLinks = this.$refs.navLinks;

    this.setupEventListeners();
    this.setupScrollReveal();
    setTimeout(this.setupTypedJS, 3050); // Delay Typed.js setup by 3,05 seconds
  },
  methods: {
    handleSubmit() {
      if (this.fullName && this.emailAddress && this.message) {
        this.buttonText = "Thank You, I will be in touch any soon!";
        this.showConfetti = true; // Show the confetti
        this.fullName = "";
        this.emailAddress = "";
        this.message = "";
        this.isSubmitted = true;
      } else {
        alert("Please fill out all fields.");
      }
    },

    setupEventListeners() {
      this.menuIcon.onclick = () => {
        this.menuIcon.classList.toggle("bx-x");
        this.navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        this.handleScroll();
      };
    },

    playVideo() {
      const video = this.$refs.videoElement;
      video.currentTime = 0; // Reset video to start
      video.play(); // Play video
    },

    pauseVideo() {
      const video = this.$refs.videoElement;
      video.pause(); // Pause video
    },

    playVideoNc() {
      const video = this.$refs.videoElementNc;
      video.currentTime = 0; // Reset video to start
      video.play(); // Play video
    },

    pauseVideoNc() {
      const video = this.$refs.videoElementNc;
      video.pause(); // Pause video
    },

    playVideoJ() {
      const video = this.$refs.videoElementJ;

      video.pause(); // Play video
    },

    pauseVideoJ() {
      const video = this.$refs.videoElementJ;
      video.play(); // Pause video
    },
    handleScroll() {
      const top = window.scrollY;

      const sections = [
        this.$refs.home,
        this.$refs.about,
        this.$refs.services,
        this.$refs.portfolio,
        this.$refs.certif,
        this.$refs.contact,
      ];
      const navLinks = this.$refs.navbar.querySelectorAll("a");

      // Check if the user has scrolled to within 100px of the bottom
      if (
        top + window.innerHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[navLinks.length - 1].classList.add("active");
        return;
      }

      sections.forEach((sec, index) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });

      // Sticky navbar logic
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      // Remove toggle icon and navbar when scrolling
      this.$refs.menuIcon.classList.remove("bx-x");
      this.$refs.navbar.classList.remove("active");
    },
    setupScrollReveal() {
      const sr = ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      // Animations for different sections and elements
      sr.reveal(".home-content", { origin: "top", delay: 3250 }); // Delay only the hero section
      sr.reveal(".heading", { origin: "top" });
      sr.reveal(
        ".home-img, .services-container, .portfolio-box, .contact form",
        { origin: "bottom" }
      );
      sr.reveal(".home-content h1, .home-img", {
        origin: "left",
        delay: 3250,
      }); // Delay only the hero section
      sr.reveal(".home-content p, .about-content", {
        origin: "right",
      });
      sr.reveal(".about-img", {
        origin: "left",
      });
    },
    smoothScroll(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    setupTypedJS() {
      const typed = new Typed(this.$refs.multipleText, {
        strings: [
          "JavaScript Developer.",
          "",
          "UX Designer.",
          "",
          "Creative Developer.",
          "",
          "Midjourney Artist.",
          "",
          "Vue Developer.",
          "",
          "Chess Player.",
        ],
        typeSpeed: 45,
        backSpeed: 75,
        backDelay: 1250,
        startDelay: 1600,
        loop: true,
      });
    },
    handleColorChange(newColor) {
      this.$refs.threeDModelTestRef.updateLightColor(newColor);
    },
  },
};
</script>

<style>
.deferred-animation {
  animation-play-state: paused !important;
  transition-delay: 3s !important;
}
</style>
