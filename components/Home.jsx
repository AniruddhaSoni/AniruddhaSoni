import { useEffect } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  OrthographicCamera,
  Points,
  RawShaderMaterial,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
export default function Home() {
  useEffect(() => {
    let i;
    innerHeight = document.querySelector("#canvasParent").clientHeight;
    innerWidth = document.querySelector("#canvasParent").clientWidth;

    const scene = new Scene();
    const aspect = innerWidth / innerHeight;
    const camera = new OrthographicCamera(-1 * aspect, aspect, 1, -1, 1, 10);
    camera.zoom = 0.5;
    camera.updateProjectionMatrix();
    camera.position.z = -5;

    const renderer = new WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;

    // ------------------------ //
    // Initial positions of points

    const count = 256 ** 2;
    const position = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const [x, y, z] = getRandomSpherePoint();
      position[i * 3 + 0] = x;
      position[i * 3 + 1] = y;
      position[i * 3 + 2] = z;
    }

    // ------------------------ //
    // Morphing shader

    const vertexShader = `
      precision highp float;
      
      attribute vec3 position;
      uniform mat4 projectionMatrix;
      uniform mat4 modelViewMatrix;
      uniform float time;
      
      #define PI  3.14159265359
      #define PI2 6.28318530718
      
      
      
      // FACTORS to stretching out the mesh
      // from puffy shape up to strict platonic one
      
      const int tetra_factor = 8;
      const int octa_factor = 4;
      const int cube_factor = 6;
      
      
      
      // PLATONIC SDF's
      
      float tetra(vec3 pos) {
        pos.xz = abs(pos.xz);
        vec3 n = normalize(vec3(0.0, sqrt(0.5), 1.0));
        float d = max(dot(pos, n.xyz), dot(pos, n.zyx * vec3(1.0, -1.0, 1.0)));
      
        for (int i = 0; i < tetra_factor; i++) d = sqrt(d);
          d -= 2.0;
        for (int i = 0; i < tetra_factor; i++) d = d * d;
      
        return d;
      }
      
      float octa(vec3 pos) {
        pos = abs(pos);
        vec3 n = normalize(vec3(1.0));
        float d = dot(pos, n);
      
        for (int i = 0; i < octa_factor; i++) d = sqrt(d);
          d -= 2.0;
        for (int i = 0; i < octa_factor; i++) d = d * d;
      
        return d;
      }
      
      float cube(vec3 pos) {
        pos = abs(pos);
        vec3 n = vec3(1.0, 0.0, 0.0);
        float d =    dot(pos, n.xyz);
          d = max(d, dot(pos, n.zxy));
          d = max(d, dot(pos, n.yzx));
        
        for (int i = 0; i < cube_factor; i++) d = sqrt(d);
          d -= 2.0;
        for (int i = 0; i < cube_factor; i++) d = d * d;
      
        return d;
      }
      
      
      
      // EASE TICK from linear to smooth-in-out
      // with a pause on shape
      
      const float t_unit = PI;
      const float period = t_unit * 3.0;
      
      float tickify(float t) {
        t = mod(t, t_unit) / t_unit;
        t = abs(4.0 * mod(t + 0.5, 1.0) - 2.0);
        t = min(t, 1.0);
        t = 0.5 - 0.5 * cos(t * PI);
        return t;
      }
      
      
      
      void main() {
      
        float tetrify = tickify(clamp(mod(time, period), 0.0, t_unit));
        float octify  = tickify(clamp(mod(time, period), t_unit, t_unit * 2.0));
        float cubify  = tickify(clamp(mod(time, period), t_unit * 2.0, t_unit * 3.0));
      
        vec3 tetra_pos = position * tetra(position) * 0.618;
        vec3 octa_pos  = position * octa(position)  * 0.8;
        vec3 cube_pos  = position * cube(position)  * 0.9;
        
        vec3 pos = position;
        pos = mix(pos, tetra_pos, tetrify);
        pos = mix(pos, octa_pos,  octify);
        pos = mix(pos, cube_pos,  cubify);
      
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 1.0;
      }
      `;
    const fragmentShader = `
      void main() {
        gl_FragColor = vec4(vec3(1), 0.4);
      }
      `;

    // ------------------------ //
    // Points mesh

    const points_geometry = new BufferGeometry();
    points_geometry.setAttribute("position", new BufferAttribute(position, 3));

    const points_material = new RawShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const points = new Points(points_geometry, points_material);
    scene.add(points);

    // ------------------------ //
    // Looper

    let t = 0.01;
    const loop = () => {
      points.material.uniforms.time.value += t;
      points.rotateY(t);
      orbit.update();
      renderer.render(scene, camera);

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    // ------------------------ //
    // Helpers

    onresize = () => {
      const aspect = innerWidth / innerHeight;
      camera.left = -1 * aspect;
      camera.right = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    function getRandomSpherePoint() {
      const theta = Math.random() * Math.PI * 2.0;
      const phi = Math.acos(Math.random() * 2.0 - 1.0);

      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      const x = sinPhi * cosTheta;
      const y = sinPhi * sinTheta;
      const z = cosPhi;
      return [x, y, z];
    }

    // ES6 Class
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }

      type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Init On DOM Load
    // document.addEventListener("DOMContentLoaded", init);

    // Init App
    function init() {
      const txtElement = document.querySelector(".txt-type");
      const words = JSON.parse(txtElement.getAttribute("data-words"));
      const wait = txtElement.getAttribute("data-wait");
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
    init();
  }, []);

  return (
    <div id="home" className="relative">
      <div className="h-[100vh] w-10/12 m-auto flex items-center justify-between">
        <div className="md:w-1/2">
          <div className="text-5xl  sm:text-6xl">
            <div className="flex gap-4">
              Hi
              <div id="wave" className="">
                👋
              </div>
            </div>
            <div className="">
              Here is,
              <span className="font-bold">Aniruddh</span>
            </div>
            <div className="">
              A{" "}
              <span
                id="type"
                className="text-accent font-bold txt-type"
                data-wait="1000"
                data-words='["Full-Stack Developer", "UI-UX Designer", "Freelancer"]'
              ></span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#about" className="btn btn-secondary btn-outline mt-4">
              HIRE ME
            </a>
            <a href="" className="btn btn-primary mt-4">
              VIEW RESUME
            </a>
          </div>
          <div id="socialIcons" className="flex mt-6 gap-4 text-4xl">
            <a
              href="https://twitter.com/AnirudhSoni1012"
              target={"blank"}
              className="text-[#1D9BF0] opacity-75 hover:opacity-100 transition-all"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/aniruddha-soni-7274261b9/"
              target={"blank"}
              className="text-[#307CAE] opacity-75 hover:opacity-100 transition-all"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/aniruddhasoni/"
              target={"blank"}
              className="text-white opacity-75 hover:opacity-100 transition-all"
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div
          id="canvasParent"
          className="absolute inset-0 opacity-70 lg:opacity-100 lg:relative lg:h-screen flex-grow overflow-hidden -z-10"
        >
          <canvas
            className="sm:scale-70 lg:scale-110 scale-130 "
            id="canvas"
          ></canvas>
        </div>
      </div>
      <div
        id="scrollBtn"
        className="absolute bottom-14 flex text-2xl w-full items-start justify-center"
      >
        <a
          className="transition-all  font-thin hover:font-medium hover:scale-125 flex flex-col items-center"
          href="#about"
        >
          <span className="">SCROLL DOWN</span>
          <span>
            <BsChevronDoubleDown />
          </span>
        </a>
      </div>
    </div>
  );
}
