  $(function()
  {
         $('.slider').slick({
          infinite: false,
          responsive: [
            {
              breakpoint:1000,
              settings: {  
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 4000
              }
            }
          ]
      });
      
     })

  

 const newsInfo = document.querySelector('.instructors__bot')
 const newsBtb = document.querySelector('.btn__active')
 const tobBackground = document.querySelector('.instructors__top')

 const newsInfo1 = document.querySelector('.instructors__bot1')
 const newsBtb1 = document.querySelector('.btn__active1')
 const tobBackground1 = document.querySelector('.instructors__top1')

 const newsInfo2 = document.querySelector('.instructors__bot2')
 const newsBtb2 = document.querySelector('.btn__active2')
 const tobBackground2 = document.querySelector('.instructors__top2')

 const newsInfo3 = document.querySelector('.instructors__bot3')
 const newsBtb3 = document.querySelector('.btn__active3')
 const tobBackground3 = document.querySelector('.instructors__top3')

 const newsInfo4 = document.querySelector('.instructors__bot4')
 const newsBtb4 = document.querySelector('.btn__active4')
 const tobBackground4 = document.querySelector('.instructors__top4')

 const newsInfo5 = document.querySelector('.instructors__bot5')
 const newsBtb5 = document.querySelector('.btn__active5')
 const tobBackground5 = document.querySelector('.instructors__top5')

 const newsInfo6 = document.querySelector('.instructors__bot6')
 const newsBtb6 = document.querySelector('.btn__active6')
 const tobBackground6 = document.querySelector('.instructors__top6')



 const moveBtn = (button,block,info) =>{
     button.onclick = () =>{
         if(info.style.height === '130px'){
            info.style.height = '0px'
        button.style.backgroundImage = 'url(images/active.png)'
          button.style.transition = 'backgroundImage 1s'
             block.style.backgroundColor = '#7d7d7e'
             block.style.transition = 'backgroundColor 1s'
         }
         else {
         button.style.backgroundImage = 'url(images/no-active.png)'
         button.style.transition = 'backgroundImage 1s'
        block.style.backgroundColor = 'orangered'
        block.style.transition = 'opasity 1s'
         info.style.height = '130px'
         }
       
     }
 }
 moveBtn(newsBtb2,tobBackground2,newsInfo2)
 moveBtn(newsBtb5,tobBackground5,newsInfo5)
 moveBtn(newsBtb6,tobBackground6,newsInfo6)
 moveBtn(newsBtb1,tobBackground1,newsInfo1)
 moveBtn(newsBtb3,tobBackground3,newsInfo3)
 moveBtn(newsBtb4,tobBackground4,newsInfo4)
 moveBtn(newsBtb,tobBackground,newsInfo)

// let wupMenu = document.querySelector('.wup__menu')
// let topMenu = document.querySelector('.header__top .header__top-inner .header__top-menu ul')
// let boxShadow = document.querySelector('.box__shadow')
// const showMenu = (button, block, box) =>{
//     button.onclick = () =>{
//         if(block.style.opacity === "0"){
//         button.style.display = 'block'
//         block.style.opacity = "1"
//         box.style.opacity = "1"
//         }
//         else{
//             block.style.opacity = "0"
//             box.style.opacity = "0"
//         }
        
//     }
// }

// showMenu(wupMenu,topMenu,boxShadow)

const butt = document.querySelector('.burger')
const menu = document.querySelector('.header__top .header__top-inner .header__top-menu ul')
const boxShadow = document.querySelector('.box__shadow')
const showMenu = (button,menu,box) =>{
    button.onclick = () =>{
        if(box.style.opacity ==='0'){
        button.style.transform = 'rotate(90deg)'
        box.style.opacity = '1'
        menu.style.height = '400px'
        menu.style.pointerEvents = 'visible'
        }
        else{
            button.style.transform = 'rotate(0deg)'
            box.style.opacity = '0'
            menu.style.transition = 'height .5s'
            menu.style.height = '0px'
        }
       
    }
   
}
 showMenu(butt,menu,boxShadow)

 const home = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(6)')
 const homeBlock = document.querySelector('.slider')
 
 const about = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(7)')
 const aboutBlock = document.querySelector('.about')

 const course = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(8)')
 const courseBlock = document.querySelector('.course')

 const gallery = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(9)')
 const galleryBlock = document.querySelector('.gallery')

 const teachers = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(10)')
 const teachersBlock = document.querySelector('.teachers')

 const our = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(3)')
 const ourBlock = document.querySelector('.our')

 const news = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(11)')
 const newsBlock = document.querySelector('.news')

 const information = document.querySelector('.header__top .header__top-inner .header__top-menu ul li:nth-child(12)')
 const informationBlock = document.querySelector('.information')

 const home1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(1)')
 const abou1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(2)')
 const course1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(3)')
 const gallery1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(4)')
 const teachers1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(5)')
 const news1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(6)')
 const contact1 = document.querySelector('.header__bot .header__bot-inner .header__bot-menu ul li:nth-child(7)')

 const slideToHome = (elem,elemBlock) =>{
     elem.onclick = () =>{
        elemBlock.scrollIntoView({behavior: "smooth"})
     }
 }
 slideToHome(home,homeBlock)
 slideToHome(about,aboutBlock)
 slideToHome(course,courseBlock)
 slideToHome(gallery,galleryBlock)
 slideToHome(teachers,teachersBlock)
 slideToHome(our,ourBlock)
 slideToHome(news,newsBlock)
 slideToHome(information,informationBlock)
 slideToHome(home1,homeBlock)
 slideToHome(abou1,aboutBlock)
 slideToHome(course1,courseBlock)
 slideToHome(gallery1,galleryBlock)
 slideToHome(teachers1,teachersBlock)
 slideToHome(news1,newsBlock)
 slideToHome(contact1,informationBlock)
 let item = document.querySelector('.scrollTop')
window.onscroll = function(){
   
    if(window.scrollY > document.documentElement.clientHeight){
        item.style.opacity = "1"
        item.classList.remove('scrollAnimOff')
        item.classList.add('scrollAnim')
    }else{
        item.style.opacity="0"
        item.classList.remove('scrollAnim')
        item.classList.add('scrollAnimOff')
    }
}
 const goUp = () =>{
     slideToHome(item,homeBlock)
 }
