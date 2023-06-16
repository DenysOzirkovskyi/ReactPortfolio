import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 30,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
      width={3638}
      height={5054}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 557) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M92.5 4893.5c-11.636 7.69-19.44 14.6-23.892 20.8m0 0c-6.342 8.83-5.88 16.23.002 22.39m-.002-22.39l-.604-4794.386m.604 4794.386l.002 22.39m0 0C117.686 4988.15 544 4954 544 4954M68.61 4936.69l.002 14.31M515.505 84c3303.995 56 3882.495 4723.5 0 4867M739 858c2252.21 38.177 2646.55 3220.17 0 3318M710 807v54.902m0 0V4123.31m0-3261.408c-20.883 2.187-35.626 5.27-45.5 7.098m45.5-7.098c24.799-2.597 58.256-3.931 102.5-.402M710 4123.31V4176m0-52.69c.166-.27.332-.54.5-.81m-.5.81c-58.506 95.04 28.684 67.7 93.5 70.69M68 83.992l.003 20.676m0 0l.001 15.246m-.001-15.246c-1.709 4.59-1.776 9.658.001 15.246m-.001-15.246C96.334 28.546 576 84.001 576 84.001M68.005 119.914c3.817 11.998 16.142 26.392 38.995 43.587M450.711 4917.47c-11.635 7.69-19.44 14.6-23.891 20.8m0 0c-6.342 8.83-5.88 16.23.002 22.4m-.002-22.4l-.604-4794.383m.604 4794.383l.002 22.4m0 0c49.074 51.45 475.389 17.3 475.389 17.3m-475.389-17.3l.002 14.3M873.717 107.974c3304.003 56 3882.493 4723.496 0 4866.996M804.001 858c90.688 1.326 178.778 6.445 264.209 15.097m0 0c2301.05 233.013 2675.37 3028.303 0 3286.173m0-3286.173v-42.123m0 42.123v12.779m0 3273.394c-84.979 8.19-173.038 13.82-264.209 16.73m264.209-16.73V885.876m0 3273.394v40.7m0-3314.094c-20.88 2.187-35.62 5.269-45.5 7.098m45.5-7.098c24.8-2.597 58.26-3.931 102.5-.402M426.212 107.966l.003 20.675m0 0l.001 15.246m-.001-15.246c-1.709 4.59-1.776 9.659.001 15.246m-.001-15.246c28.331-76.122 507.998-20.667 507.998-20.667m-507.997 35.913c3.818 11.999 16.142 26.393 38.996 43.587"


/>
            </g>
      </svg>
    </div>
  )
}

export default Logo
