<template>
  <div>
    <h1>sallllllut</h1>
    <!-- First Carousel: Left to Right -->
    <VueSlickCarousel :settings="ltrSettings">
      <div v-for="skill in webDevSkills" :key="skill">
        <img :src="`path/to/images/${skill}.png`" alt="" />
      </div>
    </VueSlickCarousel>

    <!-- Second Carousel: Right to Left -->
    <VueSlickCarousel :settings="rtlSettings">
      <div v-for="skill in frameworkSkills" :key="skill">
        <img :src="`path/to/images/${skill}.png`" alt="" />
      </div>
    </VueSlickCarousel>

    <!-- Third Carousel: Left to Right -->
    <VueSlickCarousel :settings="ltrSettings">
      <div v-for="skill in multimediaSkills" :key="skill">
        <img :src="`path/to/images/${skill}.png`" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      webDevSkills: [
        "HTML",
        "CSS",
        "SCSS",
        "SASS",
        "TailwindCSS",
        "Photoshop",
        "Figma",
        "JavaScript",
        "TypeScript",
      ],
      frameworkSkills: [
        "Vue",
        "Nuxt",
        "React",
        "Node",
        "PHP",
        "WordPress",
        "MongoDB",
        "GraphQL",
        "Git",
      ],
      multimediaSkills: [
        "GSAP",
        "Three",
        "Vite",
        "AWS",
        "Blender",
        "PremierePro",
        "Python",
        "ChatGPT",
        "Midjourney",
      ],
      ltrSettings: {
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: false,
      },
      rtlSettings: {
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
      },
    };
  },
};
</script>

<style scoped>
div {
  height: 1200px;
  width: 100%;
  background-color: yellow;
  transform: scale(99);
  z-index: 99999;
}
</style>
