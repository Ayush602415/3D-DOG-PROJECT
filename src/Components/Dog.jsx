import React ,{ useEffect, useRef } from 'react'
import {OrbitControls , useAnimations, useGLTF, useTexture} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { normalMap } from 'three/tsl'
import * as THREE from 'three'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function Dog() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

    const model = useGLTF("/models/dog.drc.glb")

    useThree(({scene , camera , gl})=>{
        camera.position.z= 0.55
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace
    } )

  const {actions} =  useAnimations(model.animations , model.scene)
    useEffect(()=>{
      actions["Take 001"].play()
    },[actions])

    const [normalMap] = useTexture(["/dog_normals.jpg"]).map((texture)=>{
      texture.flipY =false
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    })

    const [branchMap, branchNormalMap] = useTexture([ "/models/branches_diffuse.jpeg",
    "/models/branches_normals.jpeg"]).map((texture)=>{
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    })

    const [mat1,mat2,mat3,mat4,mat5,mat6,mat7,mat8,mat9,mat10,mat11,mat12,mat13,mat14,mat15,mat16,mat17,mat18,mat19,mat20,] = useTexture(["/mat-cap/matcap_01.png","/mat-cap/matcap_02.png","/mat-cap/matcap_03.png","/mat-cap/matcap_04.png","/mat-cap/matcap_05.png","/mat-cap/matcap_06.png","/mat-cap/matcap_07.png","/mat-cap/matcap_08.png","/mat-cap/matcap_09.png","/mat-cap/matcap_10.png","/mat-cap/matcap_11.png","/mat-cap/matcap_12.png","/mat-cap/matcap_13.png","/mat-cap/matcap_14.png","/mat-cap/matcap_15.png","/mat-cap/matcap_16.png","/mat-cap/matcap_17.png","/mat-cap/matcap_18.png","/mat-cap/matcap_19.png","/mat-cap/matcap_20.png"]).map((texture)=>{
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    })
      const material = useRef({
      uMatcap1: {value:mat19},
      uMatcap2: {value:mat2},
      uProgress: {value:1.0}
    })

    const dogMaterial =  new THREE.MeshMatcapMaterial({
          normalMap: normalMap,
          matcap: mat2
        })
        dogMaterial.onBeforeCompile = onbeforecompile
    const branchMaterial =  new THREE.MeshMatcapMaterial({
          normalMap: branchNormalMap,
          matcap: mat2
        })
         branchMaterial.onBeforeCompile = onbeforecompile

  
     function onbeforecompile(shader) {
        shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
        shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
        shader.uniforms.uProgress = material.current.uProgress

        // Store reference to shader uniforms for GSAP animation

        shader.fragmentShader = shader.fragmentShader.replace(
            "void main() {",
            `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
        )

        shader.fragmentShader = shader.fragmentShader.replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
        )
    }
    
    model.scene.traverse((child)=>{
      if(child.name.includes("DOG")){
        child.material = dogMaterial
      }
      else{
        child.material = branchMaterial
      }
    })
 const dog = useRef(model)
    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#section-1",
          endTrigger:"#section-4",
          start:"top top",
          end:"bottom bottom",
          markers: true,
          scrub: true

        }
      })
      tl
      .to(dog.current.scene.position,{
        z:"-=0.75",
        y:"+=0.18"
        
      })
      .to(dog.current.scene.rotation,{
        x:`+=${Math.PI / 15}`
      })
       .to(dog.current.scene.rotation,{
        y:`-=${Math.PI}`
      },"third")
      .to(dog.current.scene.position,{
        z:"+=0.65",
        y:"-=0.1",
        x:"-=0.4"
        
      },"third")
    },[])
    
      useEffect(()=>{
        document.querySelector(`.title[img-title="tommorow-land"]`).addEventListener("mouseenter",()=>{
          material.current.uMatcap1.value = mat19
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
                document.querySelector(`.title[img-title="Navy"]`).addEventListener("mouseenter",()=>{
                   material.current.uMatcap1.value = mat8
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
                document.querySelector(`.title[img-title="chichago"]`).addEventListener("mouseenter",()=>{
                   material.current.uMatcap1.value = mat9
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
                document.querySelector(`.title[img-title="Lousis"]`).addEventListener("mouseenter",()=>{
                   material.current.uMatcap1.value = mat12
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
                document.querySelector(`.title[img-title="KIKK"]`).addEventListener("mouseenter",()=>{
                   material.current.uMatcap1.value = mat10
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
                document.querySelector(`.title[img-title="kennedy"]`).addEventListener("mouseenter",()=>{
                   material.current.uMatcap1.value = mat11
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
          document.querySelector(`.title[img-title="opera"]`).addEventListener("mouseenter",()=>{
             material.current.uMatcap1.value = mat13
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
        document.querySelector(`.titles`).addEventListener("mouseleave",()=>{
             material.current.uMatcap1.value = mat2
          gsap.to(material.current.uProgress,{
            value: 0.0,
            duration: 0.3,
            onComplete:()=>{
              material.current.uMatcap2.value = material.current.uMatcap1.value
              material.current.uProgress.value =1.0
            }
          })
        })
      })
      
      return (
    <>
    <primitive object={model.scene} position={[0.10,-0.55,0]} rotation={[0,Math.PI/3.8,0]}/>
    <directionalLight position={[0,5,5]} color={0xffffff} intensity={10} />
    </>
  )
}



export default Dog

