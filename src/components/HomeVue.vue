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
        >Services
      </a>
      <a href="#portfolio" @click.prevent="smoothScroll('portfolio')"
        >Projects</a
      >
      <a href="#certif" @click.prevent="smoothScroll('certif')"
        >Certification</a
      >
      <a href="#contact" @click.prevent="smoothScroll('contact')">Contact</a>
    </nav>
  </header>

  <section class="home" ref="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Vito Savalli</h1>
      <h3>And I'm a <span class="multiple-text" ref="multipleText"></span></h3>
      <p>
        I'm a passionate JavaScript developer with a strong focus on Frontend
        creative design. For me, it's not just about writing lines of code,
        <br />
        it's about bringing a digital vision to life.
      </p>
      <div class="social-media">
        <a href="#"><i class="linkedin"></i></a>
        <a href="#"><i class="github"></i></a>
        <a href="#"><i class="bx bxl-instagram-alt"></i></a>
        <a href="#"><i class="bx bxl-linkedin"></i></a>
      </div>
      <a href="#" class="btn">Download CV</a>
    </div>
    <div class="home-img">
      <ThreeDModelTest />
    </div>
  </section>

  <section class="about" ref="about">
    <div class="about-img">
      <img src="../assets/images/about.png" alt="" />
    </div>
    <div class="about-content">
      <h2 class="heading">About <span>Me</span></h2>
      <h3>Frontend Developer!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        officia asperiores labore officiis suscipit ex at non impedit nostrum
        animi illum mollitia itaque reprehenderit laudantium molestiae eum porro
        molestias repudiandae, amet ea eos alias corporis laborum nobis. Tempore
        deserunt repellendus quos nihil voluptas aut est suscipit.
      </p>
      <a href="#" class="btn">Read More</a>
    </div>
  </section>

  <section class="services" ref="services">
    <h2 class="heading">My <span>Expertise</span></h2>
    <div class="services-container">
      <!-- ... your service boxes ... -->
      <div class="services-box">
        <i class="bx bx-code-alt"></i>
        <h3>Web Development</h3>
        <p>Lorem ipsum JS VUE live SPA,</p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="services-box">
        <i class="bx bxs-paint"></i>
        <h3>UX Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dignissimos vitae magni aut commodi non laborum nisi alias iusto
          voluptatibus.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="services-box">
        <i class="bx bx-bar-chart-alt"></i>
        <h3>Prompt Engineering | Processes Automation</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dignissimos vitae magni aut commodi non laborum nisi alias iusto
          voluptatibus.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>

  <section class="portfolio" ref="portfolio">
    <h2 class="heading">Selected <span>Projects</span></h2>
    <div class="portfolio-container">
      <!-- ... your portfolio boxes ... -->
      <div class="portfolio-box">
        <img src="../assets/images/portfolio1.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio2.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio3.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio4.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio5.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
        <img src="../assets/images/portfolio6.jpg" alt="" />
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
    </div>
  </section>

  <section class="certif" ref="certif">
    <h2 class="heading">Certification</h2>
    <div class="certif-container">
      <div class="certif-box">
        <img src="" alt="Certification 1" />
        <p>Certification 1 Description</p>
      </div>
      <div class="certif-box">
        <img src="" alt="Certification 2" />
        <p>Certification 2 Description</p>
      </div>
      <!-- ... Repeat for all your certifications ... -->
    </div>
  </section>

  <section class="contact" ref="contact">
    <h2 class="heading">Contact <span>Me!</span></h2>
    <form action="#">
      <!-- ... your form content ... -->
      <div class="input-box">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="input-box">
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <input type="submit" value="Send Message" class="btn" />
    </form>
  </section>

  <footer class="footer">
    <div class="footer-text">
      <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
    </div>
    <div class="footer-iconTop">
      <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
    </div>
  </footer>
</template>

<script>
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import ThreeDModelTest from "@/components/ThreeDModelTest.vue";

export default {
  name: "Portfolio",
  components: { ThreeDModelTest },
  data() {
    return {
      menuIcon: null,
      navbar: null,
      sections: null,
      navLinks: null,
    };
  },
  mounted() {
    this.menuIcon = this.$refs.menuIcon;
    this.navbar = this.$refs.navbar;
    this.sections = this.$refs.sections;
    this.navLinks = this.$refs.navLinks;

    this.setupEventListeners();
    this.setupScrollReveal();
    this.setupTypedJS();
  },
  methods: {
    setupEventListeners() {
      this.menuIcon.onclick = () => {
        this.menuIcon.classList.toggle("bx-x");
        this.navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        this.handleScroll();
      };
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
      ScrollReveal({
        // reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      const sr = ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      // Animations for different sections and elements
      sr.reveal(".home-content, .heading", { origin: "top" });
      sr.reveal(
        ".home-img, .services-container, .portfolio-box, .contact form",
        { origin: "bottom" }
      );
      sr.reveal(".home-content h1, .about-img", { origin: "left" });
      sr.reveal(".home-content p, .about-content", { origin: "right" });
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
          "Frontend Developer.",
          "",
          "Digital Marketing Expert.",
          "",
          "Vue Developer.",
          "",
          "Web3 Enthusiast.",
          "",
          "Javascript Developer.",
          "",
          "Fun Chess Player!",
        ],
        typeSpeed: 45,
        backSpeed: 75,
        backDelay: 1250,
        startDelay: 1600,
        loop: true,
      });
    },
  },
};
</script>

<style></style>
