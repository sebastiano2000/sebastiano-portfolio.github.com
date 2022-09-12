$(document).ready(function(){

    const tabs = document.querySelectorAll('[data-target]');
    const tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills_active')
            })

            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove('skills_active')
            })

            tab.classList.add('skills_active')
        })
    })

    let mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });

    const linkWork = document.querySelectorAll('.work_item');

    function activeWork(){
        linkWork.forEach(l => l.classList.remove('active_work'));
        this.classList.add('active_work');
    }
    
    linkWork.forEach(link => link.addEventListener("click", activeWork));

    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("work_button")) {
            togglePortfolioPopup();
            porttfolioItemDetails(e.target.parentElement);
        }
    })

    function togglePortfolioPopup() {
        document.querySelector(".portfolio_popup").classList.toggle("open");
    }

    document.querySelector(".portfolio_popup_close").addEventListener("click", togglePortfolioPopup)

    function porttfolioItemDetails(portfolioItem) {
        document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_image").src;
        document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
        document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
    }

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scrolling Button Btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
            "Front-End Developer", "Back-End Developer", "Software Engineer", "Web Developer", "App Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
});

