import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {

    }, []);
    return(
        <Particles

        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        fullScreen: { zIndex:-1},
          background: {
            color: {
              value: "Transparent",
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 40,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 50,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              speed: 1,
              outModes: {
                default: "bounce",
              },
              random: false,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1600,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
                type: "char",
                character: [{
                    fill: true,
                    font: "Verdana",
                    style: "",
                    value: "js",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "html",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "css",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "c#",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "python",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "</>",
                    weight: "400"
                  },
                  {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "react",
                    weight: "400"
                  }],
            },
            size: {
              value: { min: 5, max: 10 },
            },
          },
          detectRetina: true,
        }}
    />
    )
}

export default Particle;
