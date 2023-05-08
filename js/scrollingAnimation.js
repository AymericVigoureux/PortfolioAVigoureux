// Polyfill pour l'utilisation de forEach dans des éléments de type NodeList

if (NodeList.prototype.forEach === undefined) {
	NodeList.prototype.forEach = Array.prototype.forEach
}

// 1. Test pour comprendre le fonctionnement de l'intersectionObserver sur la console

let observer = new IntersectionObserver(function(entries){
	entries.forEach(function(entry){
		if (entry.intersectionRatio > 0.1) {
			entry.target.classList.remove('not-visible')
		}else{
			entry.target.classList.add('not-visible')
		}
	})
	// console.log(entries)
},{
	threshold: [0.1]
})

// On le fait pour l'ensemble des items qui ont la classe title

let items = document.querySelectorAll('.title')
items.forEach(function(item){
	item.classList.add('not-visible')
	observer.observe(item)
})
// On le fait pour l'ensemble des items qui ont la classe container-content

let itemsContainer = document.querySelectorAll('.container-content')
itemsContainer.forEach(function(itemContainer){
	itemContainer.classList.add('not-visible')
	observer.observe(itemContainer)
})

// On le fait pour l'ensemble des items qui ont la classe container-content-quality

let itemsContainerQuality = document.querySelectorAll('.container-content-quality')
itemsContainerQuality.forEach(function(itemsContainerQuality){
	itemsContainerQuality.classList.add('not-visible')
	observer.observe(itemsContainerQuality)
})

// On le fait pour l'ensemble des items qui ont la classe a-propos-de-moi-container
let itemAproposDeMoi = document.querySelector('.a-propos-de-moi-container')
itemAproposDeMoi.classList.add('not-visible')

observer.observe(document.querySelector('.a-propos-de-moi-container'))

// On le fait pour l'ensemble des items qui ont la classe tiles
let itemTiles = document.querySelector('.tiles')
itemTiles.classList.add('not-visible')

observer.observe(document.querySelector('.tiles'))

// On le fait pour l'ensemble des items qui ont la classe container-timeline
let itemTimelineContainer = document.querySelector('.timeline-container')
itemTimelineContainer.classList.add('not-visible')

observer.observe(document.querySelector('.timeline-container'))

// On le fait pour l'ensemble des items qui ont la classe contact
let itemcontact = document.querySelector('.contact')
itemcontact.classList.add('not-visible')

observer.observe(document.querySelector('.contact'))

// On le fait pour l'ensemble des items qui ont la classe contact-cube-left
let itemcontactCubeLeft = document.querySelector('.contact-cube-left')
itemcontactCubeLeft.classList.add('not-visible')

observer.observe(document.querySelector('.contact-cube-left'))

