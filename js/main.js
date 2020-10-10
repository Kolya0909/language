  $(function()
  {
         $('.slider').slick({
          infinite: false,
          responsive: [
            {
              breakpoint: 656,
              settings: {  
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 4000
              }
            }
          ]
      });
      $('.col-sm-3').onmouseover(function(){
          $('.teacher__hover').slideToggle();
     })

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
        button.style.backgroundImage = 'url(/images/active.png)'
          button.style.transition = 'backgroundImage 1s'
             block.style.backgroundColor = '#7d7d7e'
             block.style.transition = 'backgroundColor 1s'
         }
         else {
         button.style.backgroundImage = 'url(/images/no-active.png)'
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
        menu.style.height = '405px'
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
