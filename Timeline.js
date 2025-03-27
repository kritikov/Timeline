
class Timeline {

	// PROPERTIES

	#canvas;
	#contents = {
		upperTitle: "upper title",
		lowerTitle: "lower title",
		milestones: []
	};


	///// CONSTRUCTOR

	constructor(options) {

		if (options.element) {
			let canvas = document.createElement("div");
			canvas.classList.add("tl-canvas");
			options.element.appendChild(canvas);
			this.#canvas = canvas;
		}

		// add event listener to canvas
		this.#canvas.addEventListener("click", this.#handleClick.bind(this));

	}


	///// PUBLIC METHODS

	// draw the timeline
	draw() {
		let html = this.#contentsHTML();

		this.#canvas.innerHTML = html;
	}

	// add a milestone at the end
	addMilestone(milestone) {
		this.#contents.milestones.push(milestone);
	}

	// set the title on the upper events
	setUpperTitle(title) {
		this.#contents.upperTitle = title;
	}

	// set the title on the lower events
	setLowerTitle(title) {
		this.#contents.lowerTitle = title;
	}


	///// PRIVATE METHODS

	// The method that is called when we click on the canvas
	#handleClick(event) {

		// Έλεγχος αν το κλικ έγινε για να ανοίξει το detail των parts
		if (event.target.classList.contains('tl-event-text')) {
			let tl_event = event.target.closest(".tl-event");
			if (tl_event.classList.contains('tl-event-withDetails')) {
				event.stopPropagation();
				this.#displayDetails(tl_event);
			}
		}
	}

	// display the details of an event
	#displayDetails(element) {

		let details = element.querySelector(".tl-event-details");
		if (details) {
			let displayDetailsHTML = "";
			displayDetailsHTML += `<div class="tl-detailsViewer">`;
			displayDetailsHTML += `	<div class="tl-detailsViewer-block"></div>`;
			displayDetailsHTML += `	<div class="tl-detailsViewer-contents">`;
			displayDetailsHTML += `		<div class="tl-detailsViewer-buttons"><span class="tl-detailsViewer-buttons-close" onclick="let detailsViewer = this.closest('.tl-detailsViewer'); detailsViewer.remove();">x</span></div>`;
			displayDetailsHTML += details.innerHTML;
			displayDetailsHTML += `	</div>`;
			displayDetailsHTML += `</div>`;

			document.body.insertAdjacentHTML('beforeend', displayDetailsHTML);
		}
	}

	// get the contents of the timeline as HTML
	#contentsHTML() {
		let html = "";
		html = `<table class='tl-contents'>`;
		html += `	<tbody>`;
		html += this.#milestonesHTML();
		html += `	</tbody>`;
		html += `</table>`;

		return html;
	}

	// get the contents of a milestone as HTML
	#milestonesHTML() {
		let html = ``;

		// periods
		html += `<tr>`;
		if (this.#contents.upperTitle || this.#contents.lowerTitle) {
			html += `<td></td>`;
		}
		let milestonePosition = 0;
		for (let milestone of this.#contents.milestones) {
			if (milestone.period) {
				html += `<td class="tl-period" colspan="${milestone.period.milestones}"><div>${milestone.period.text}</div></td>`;
				milestonePosition = milestone.period.milestones - 1;
			}
			else if (milestonePosition > 0) {
				milestonePosition--;
			}
			else {
				html += `<td></td>`;
			}
		}
		html += `</tr>`;


		// upper events
		html += `<tr>`;
		if (this.#contents.upperTitle) {
			html += `<td class="tl-upperTitle"><div>${this.#contents.upperTitle}</div></td>`;
		}
		for (let milestone of this.#contents.milestones) {
			html += `<td><div class="tl-upperEvents">`;
			if (milestone.events) {
				for (let event of milestone.events) {
					if (event.place === "up")
						html += this.#upperEventHTML(event);
				}
			}
			html += `</div></td>`;
		}
		html += `</tr>`;


		// milestones
		html += `<tr class="tl-milestones">`;
		if (this.#contents.upperTitle || this.#contents.lowerTitle) {
			html += `<td></td>`;
		}
		for (let milestone of this.#contents.milestones) {
			html += `<td><div class="tl-milestone">${milestone.title}</div></td>`;
		}
		html += `</tr>`;


		// lower events
		html += `<tr>`;
		if (this.#contents.lowerTitle) {
			html += `<td class="tl-lowerTitle"><div>${this.#contents.lowerTitle}</div></td>`;
		}
		for (let milestone of this.#contents.milestones) {
			html += `<td><div class="tl-lowerEvents">`;
			if (milestone.events) {
				for (let event of milestone.events) {
					if (event.place === "down")
						html += this.#lowerEventHTML(event);
				}
			}
			html += `</div></td>`;
		}
		html += `</tr>`;

		return html;
	}

	// get the contents of an upper event as HTML
	#upperEventHTML(event) {
		let html = ``;

		html += `<div class="tl-upperEvent">`;
		html += this.#eventHTML(event);
		html += this.#eventConnectionLineHTML(event);
		html += `</div>`;

		return html;
	}

	// get the contents of an lower event as HTML
	#lowerEventHTML(event) {
		let html = ``;

		html += `<div class="tl-lowerEvent">`;
		html += this.#eventConnectionLineHTML(event);
		html += this.#eventHTML(event);
		html += `</div>`;

		return html;
	}

	// get the contents of an event as HTML
	#eventHTML(event) {
		let html = ``;
		let extraClass = ``, details = '';

		if (event.details) {
			extraClass = ` tl-event-withDetails`;
			details = this.#eventDetailsHTML(event.details);
		}

		if (event.customClass)
			extraClass += ` ${event.customClass}`;

		html += `<div class="tl-event ${extraClass}">`;
		html += `	<div class="tl-event-text">${event.text}</div>`;
		html += details;
		html += `</div>`;

		return html;
	}

	// get the details of an event as HTML
	#eventDetailsHTML(details) {
		let html = ``;

		html += `<div class="tl-event-details tl-hidden">`;
		if (details.title)
			html += `<div class="tl-event-details-title">${details.title}</div>`;
		if (details.text)
			html += `<div class="tl-event-details-text">${details.text}</div>`;
		html += `</div>`;

		return html;
	}

	// get the connection line between an event and the timeline as HTML
	#eventConnectionLineHTML(event) {
		let html = ``;
		let forceStyle = ``;

		if (event.distance)
			forceStyle += ` height: ${event.distance}px`;

		html += `	<div class="tl-eventConnectionLine" style="${forceStyle}"></div>`;

		return html;
	}

}