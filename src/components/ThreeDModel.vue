<template>
  <div ref="threeContainer" style="width: 100%; height: 500px"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "ThreeDModel",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
    };
  },
  mounted() {
    this.initThree();
    this.animate();
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    initThree() {
      const container = this.$refs.threeContainer;

      // Create a scene
      this.scene = new THREE.Scene();

      // Setup camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      // Setup renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(this.renderer.domElement);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1);
      this.scene.add(directionalLight);

      // Load the model
      const loader = new GLTFLoader();
      loader.load("/chess-knight.glb", (gltf) => {
        this.model = gltf.scene;
        this.scene.add(this.model);
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.model) {
        this.model.rotation.y += 0.005;
      }
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      const container = this.$refs.threeContainer;
      this.camera.aspect = container.offsetWidth / container.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    },
  },
};
</script>

<style scoped>
/* Adjust the size as needed */
div {
  width: 100%;
  height: 500px;
}
</style>
