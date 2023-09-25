<template>
  <div ref="threeContainer" id="threeContainer"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "ThreeDModelTest",

  data() {
    return {
      isDragging: false,
      previousMousePosition: { x: 0, y: 0 },
      neonLight: null,
    };
  },

  // Lifecycle hooks
  mounted() {
    this.initThreeJS();
    this.addEventListeners();
  },

  beforeDestroy() {
    this.removeEventListeners();
  },

  methods: {
    // Three.js initialization
    initThreeJS() {
      this.setupScene();
      this.setupLights();
      this.loadModel();
    },

    // Scene setup
    setupScene() {
      this.scene = new THREE.Scene();
      this.setupCamera();
      this.setupRenderer();
    },

    setupCamera() {
      this.camera = new THREE.PerspectiveCamera(
        50,
        this.$refs.threeContainer.offsetWidth /
          this.$refs.threeContainer.offsetHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 3, 10); // Adjusted the y value to 2
      this.camera.lookAt(0, 0, 0);
    },

    setupRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(
        this.$refs.threeContainer.offsetWidth,
        this.$refs.threeContainer.offsetHeight
      );
      this.renderer.setClearColor(0x000000, 0);
      this.$refs.threeContainer.appendChild(this.renderer.domElement);
    },

    // Lighting setup
    setupLights() {
      const ambientLight = new THREE.AmbientLight(0x00cc00, 0.2);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(-5, 1, 1); // Moved to the left

      this.neonLight = new THREE.PointLight(0x009100, 70, 10);
      this.neonLight.position.set(-6, 1, 3);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemiLight.position.set(-5, -20, 0); // Moved to the left

      const pointLight = new THREE.PointLight(0xffffff, 1, 100);
      pointLight.position.set(-4, -5, 5); // Moved to the left

      this.scene.add(
        ambientLight,
        directionalLight,
        this.neonLight,
        hemiLight,
        pointLight
      );

      console.log("Neon light initialized:", this.neonLight);
    },

    // Model loading
    loadModel() {
      const loader = new GLTFLoader();
      loader.load("./knight.glb", (gltf) => {
        this.model = gltf.scene;
        this.centerAndScaleModel();
        this.adjustMaterialProperties();
        this.scene.add(this.model);
        this.animate();
      });
    },
    centerAndScaleModel() {
      const box = new THREE.Box3().setFromObject(this.model);
      const center = box.getCenter(new THREE.Vector3());
      this.model.position.sub(center);
      this.model.position.y += 1.4; // Adjust this value as needed

      // Manual adjustment (if needed)
      const manualOffset = new THREE.Vector3(1, 1, 1); // Adjust x, y, z values as needed
      this.model.position.add(manualOffset);

      // Check viewport width and adjust scale
      if (window.innerWidth <= 1520) {
        this.model.scale.set(1.8, 1.8, 1.8); // Adjust these values for smaller screens
      } else {
        this.model.scale.set(2.1, 2.1, 2.1);
      }
    },

    adjustMaterialProperties() {
      this.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshBasicMaterial) {
            const phongMaterial = new THREE.MeshPhongMaterial({
              color: 0x333333,
              map: child.material.map,
            });
            child.material = phongMaterial;
          }
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.color.set(0x333333);
            child.material.roughness = 0.35;
            child.material.metalness = 0.2;
            child.material.emissive.set(0x000500);
            child.material.needsUpdate = true;
          }
        }
      });
    },

    // Animation
    animate() {
      requestAnimationFrame(this.animate);
      if (this.model) {
        this.model.rotation.y += 0.005;
      }
      this.renderer.render(this.scene, this.camera);
    },

    // Event handlers
    addEventListeners() {
      this.$refs.threeContainer.addEventListener("mousedown", this.onMouseDown);
      this.$refs.threeContainer.addEventListener("mousemove", this.onMouseMove);
      this.$refs.threeContainer.addEventListener("mouseup", this.onMouseUp);
      window.addEventListener("resize", this.onWindowResize);
    },

    removeEventListeners() {
      this.$refs.threeContainer.removeEventListener(
        "mousedown",
        this.onMouseDown
      );
      this.$refs.threeContainer.removeEventListener(
        "mousemove",
        this.onMouseMove
      );
      this.$refs.threeContainer.removeEventListener("mouseup", this.onMouseUp);
      window.removeEventListener("resize", this.onWindowResize);
    },

    onMouseDown(event) {
      this.isDragging = true;
      this.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    },

    onMouseMove(event) {
      if (!this.isDragging || !this.model) return;
      const deltaX = event.clientX - this.previousMousePosition.x;
      this.model.rotation.y += deltaX * 0.01;
      this.previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    },

    onMouseUp() {
      this.isDragging = false;
    },

    onWindowResize() {
      // Update camera aspect ratio
      this.camera.aspect =
        this.$refs.threeContainer.offsetWidth /
        this.$refs.threeContainer.offsetHeight;

      // Update camera's projection matrix
      this.camera.updateProjectionMatrix();

      // Update renderer size
      this.renderer.setSize(
        this.$refs.threeContainer.offsetWidth,
        this.$refs.threeContainer.offsetHeight
      );
    },

    updateLightColor(newColor) {
      if (this.neonLight) {
        this.neonLight.color.set(new THREE.Color(newColor));
      } else {
        console.warn("neonLight has not been initialized yet.");
      }
    },
  },
};
</script>

<style scoped>
#threeContainer {
  position: absolute;
  top: -70px;
  right: -168px;
  width: 780px;
  height: 900px;
  background-color: #f0f0f000; /* Transparent background */
  cursor: grab;
}

@media (min-width: 1520px) {
  #threeContainer {
    right: -124px;
  }
}
</style>
