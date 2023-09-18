'use client';
import { useState, useEffect } from "react";
import {IoLogoJavascript} from 'react-icons/io';
import {FaEye} from 'react-icons/fa'
import {BiLogoTailwindCss, BiSolidFileCss, BiLogoReact, BiLogoTypescript} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import { Section, month, monthNames } from "../../types";
import {AiFillGithub} from "react-icons/ai"

  const sections: Section[] = [
    {
      id: 1,
      title: "Welcome",
      img_url: "/images/daria-kraplak-d34DtRp1bqo-unsplash.jpg",
      display: true,
      message: "I am Handel Arubisou aka Handel1926, A fullstack Web Developer. This site is built using Next-js/Js/CSS/Tailwind/Typescript Hope you enjoy my page? 👍",
    },
    {
      id: 2,
      title: "About",
      img_url: "/images/mike-hindle-DWyRC2juMgs-unsplash.jpg",
      display: false,
      message: "I am a Full-stack web developer based in Nigeria. with 2years experience. Studied with Angela Yu at Udemy online course(Vanilajs, html, css, Bootstrap, MongoDB, mongoose, nodejs, React, Restfull API, WEB-3, Mokoto, Passport), Dave Gray youTube channel(Next-js, Typescript, tailwind) and other youtubers. Primarily a graduate of Medicine & Surgery from Niger Delta University",
      icons: [{
        id: 1,
        icon: <IoLogoJavascript />,
        name: "Vanila-js"
      },
      {
        id: 2,
        icon: <BiLogoTypescript />,
        name: "TypeScript"
      },
      {
        id: 3,
        icon: <BiSolidFileCss />,
        name: "CSS"
      },
      {
        id: 4,
        icon: <BiLogoTailwindCss />,
        name: "Tailwind CSS"
      },
      {
        id: 5,
        icon: <BiLogoReact />,
        name: "React-js"
      },
      {
        id: 6,
        icon: <TbBrandNextjs />,
        name: "Next-js"
      }
    ]
    },
    {
      id: 3,
      title: "Contact",
      img_url: "/images/johnny-briggs-8EKqWqS_8_A-unsplash.jpg",
      display: false,
      contact: ["Email: ebi1926a@gmail.com", "Phone: +234-8166545589"]
    }
  ]
  

export default function Home() {
  const  dateTime = new Date()
  const day = dateTime.getDay();
  const date = dateTime.getDate();
  const monthInt = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const months : monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const month: month = months[monthInt]



  const [display, setDisplay] = useState<Section[]>();
  const [show, setShow] = useState(false)
  useEffect(()=>{
      setDisplay(sections)
  },[])
  const handleSec = (id: number)=>{
    const newDisplayState = display?.map(d=>{
      return d.id === id ? {...d, display: true} : {...d, display: false}
    })
    setDisplay(newDisplayState)
  }
  const handleHover = ()=>{
    const newDisplayState = display?.map(d=>{
      return {...d, display: false}
    })
    setDisplay(newDisplayState)
  }
  
  return (
    <main className='h-screen  relative  z-20'>
        <nav className='flex flex-col justify-center gap-1 md:flex-row md:justify-between fixed top-0 z-40 border-b border-black p-1 md:p-3 px-2 md:px-10 shadow-2xl w-full'>
          <h1 className=" text-2xl md:text-3xl text-gray-300">HANDEL1926</h1>
          <ul className='flex gap-2'>
              <li onClick={handleHover} className="p-1" title="View Background"><FaEye /></li>
              {display && display.map(d=>(
                  <li className="text-gray-300 hover:text-gray-100 hover:cursor-pointer hover:underline hover:decoration-wavy" key={d.id}>
                      <h1 onClick={()=>handleSec(d.id)}>{d.title}</h1>
                  </li>
              ))}
              <li><a title="github Link" className=" text-2xl" href="https://github.com/Handel1926"><AiFillGithub/></a></li>
          </ul>
        </nav>
        
      
      {display && display.map(d=>(
        
        <section id={d.title} className={`display h-full w-full pt-20 md:pt-16 px-4 pb-3 ${d.display ? "activate" : undefined}`} key={d.id} style={{backgroundImage: `url(${d.img_url})`, }}>
          <section className="absolute top-0 right-0  z-20 text-sm  p-2 md:p-20">
                <h1>{d.id === 1 && `${date}th ${month} ${year}`}</h1>
          </section>
          <div className="flex flex-col overflow-scroll md:overflow-hidden md:grid md:grid-cols-5 md:p-10 h-full border-1 border-black shadow-2xl p-2 md:p10 displayDiv">
            <div className="title md:col-span-3 hover:text-2xl hover: text-white">
              <h1 className={`text-2xl p-4  ${d.display && "activate"}`}>{d.title}</h1>
              <p className={`p-4  ${d.display && "activate"}`}>{d.message}</p>
              {d.contact &&
                <ul>
                  {d.contact.map((con, index)=>(
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              }
            </div>
            {d.icons &&
            <div className=" bg-slate-950 p-4 h-fit text-white md:col-span-2">
              <h2 className=" text-center">Knowledge</h2>
              <ul className="flex flex-row flex-wrap lg:flex-col ">
                {d.icons.map((icon)=>(
                  <li className="flex  justify-between text-2xl p-3 " key={icon.id}>{icon.icon}<span className="hidden lg:block">{icon.name}</span></li>
                ))}
                <li className="text-xl ">Mongodb, Mongoose, Nodejs, Passport, Bootstrap</li>
              </ul>
            </div>
            }
            
          </div>

          
        </section>
      ))}
      
    </main>
  )
}
