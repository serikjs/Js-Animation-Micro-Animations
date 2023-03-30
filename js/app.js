const tl = gsap.timeline({
	defaults: { duration: 0.35, ease: 'Power2.easeOut' },
})
const home = document.querySelector('.home')
const notification = document.querySelector('.notification')
const message = document.querySelector('.message')

//Home Animate

//feather start style
gsap.set('.feather', { scale: 0, transformOrigin: 'center' })

home.addEventListener('click', e => {
	gsap.fromTo('.home-svg', { scale: 1 }, { scale: 0.85, yoyo: true, repeat: 1 })
	gsap.fromTo(
		'.feather',
		{ y: -5, scale: 0 },
		{ y: 20, scale: 1.5, duration: 2, stagger: 0.3 }
	)
	gsap.fromTo('.right-feather', { x: 0 }, { x: 5 })
})

//Notification Animate

//bell start style
gsap.set('.bell', { transformOrigin: 'top center' })
//ringer start style
gsap.set('.ringer', { transformOrigin: 'top center' })
//wave start style
gsap.set('.wave', { opacity: 0, transformOrigin: 'bottom' })
notification.addEventListener('click', e => {
	gsap.fromTo(
		'.bell',
		{ rotation: -5 },
		{ rotation: 0, duration: 2, ease: 'elastic.out(5,0.2)' }
	)
	gsap.fromTo(
		'.ringer',
		{ rotation: -3, x: 0.5 },
		{ rotation: 0, x: 0, duration: 2, ease: 'elastic.out(5,0.2)' }
	)
	gsap.fromTo(
		'.wave',
		{ scale: 0, opacity: 1 },
		{ scale: 1.3, opacity: 0, duration: 1 }
	)
})

//Message Animate
//flap start style
gsap.set('.flap', { transformOrigin: 'top' })
message.addEventListener('click', e => {
	tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 })
		.fromTo('.flap', { scale: 1 }, { scale: -1 }, '<70%')
		.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, '<70%')
		.fromTo(
			'.note',
			{ y: 0, opacity: 1 },
			{ y: -40, opacity: 0, duration: 0.75 }
		)
		.to('.flap', { scale: 1 }, '<50%')
})
