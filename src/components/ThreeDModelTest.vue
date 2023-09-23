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
    };
  },
  mounted() {
    // Three.js objects
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.$refs.threeContainer.offsetWidth /
        this.$refs.threeContainer.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 3, 5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      this.$refs.threeContainer.offsetWidth,
      this.$refs.threeContainer.offsetHeight
    );
    this.renderer.setClearColor(0x000000, 0);

    this.$refs.threeContainer.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x003300, 0.5); // Dark green ambient light
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    const neonLight = new THREE.PointLight(0x00ff00, 2, 15); // Bright green light with a decay over 15 units
    neonLight.position.set(0, 1, 2); // Adjust position as needed
    this.scene.add(neonLight);

    // Add the point light here
    const pointLight = new THREE.PointLight(0xffffff, 4, 100); // Increased intensity to 1.5

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load("/Queen.glb", (gltf) => {
      this.model = gltf.scene;
      // Traverse through all children of the loaded model
      // Traverse through all children of the loaded model

      const box = new THREE.Box3().setFromObject(this.model);
      const center = box.getCenter(new THREE.Vector3());
      this.model.position.sub(center);

      // Scale the model to half its original size
      this.model.scale.set(1, 1, 1);
      this.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // If the material is MeshBasicMaterial, change it to MeshPhongMaterial and adjust the color
          if (child.material instanceof THREE.MeshBasicMaterial) {
            const phongMaterial = new THREE.MeshPhongMaterial({
              color: 0x333333, // Light black color
              map: child.material.map,
            });
            child.material = phongMaterial;
          }

          // If the material is MeshPhysicalMaterial, adjust its properties and color
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.color.set(0x333333); // Light black color
            child.material.roughness = 0.35;
            child.material.metalness = 0.2;
            child.material.emissive.set(0x000500);
            child.material.needsUpdate = true;
          }
        }
      });

      const ambientLight = new THREE.AmbientLight(0x00cc00, 0.2); // Reduced intensity
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3); // Reduced intensity
      const neonLight = new THREE.PointLight(0x00ff00, 0.5, 10); // Reduced intensity
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6); // Reduced intensity
      const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Reduced intensity

      this.scene.add(this.model);
      this.animate();
    });

    this.$refs.threeContainer.addEventListener("mousedown", this.onMouseDown);
    this.$refs.threeContainer.addEventListener("mousemove", this.onMouseMove);
    this.$refs.threeContainer.addEventListener("mouseup", this.onMouseUp);

    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
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
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      if (this.model) {
        this.model.rotation.y += 0.005;
      }
      this.renderer.render(this.scene, this.camera);
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
      this.camera.aspect =
        this.$refs.threeContainer.offsetWidth /
        this.$refs.threeContainer.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.$refs.threeContainer.offsetWidth,
        this.$refs.threeContainer.offsetHeight
      );
    },
  },
};
</script>

<style scoped>
#threeContainer {
  width: 600px;
  height: 800px;
  background-color: #f0f0f000; /* Transparent background */
  cursor: grab;
  border: 2px solid red;
}
</style>
