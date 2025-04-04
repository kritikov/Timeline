
class Timeline {

	// PROPERTIES

	#canvas;
	#contents = {
		upperTitle: "",
		lowerTitle: "",
		type: "default",
		typeClass: "tl-type-default",
		customClass: "",
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

	// set custom class
	setCustomClass(className) {
		this.#contents.customClass = className;
	}

	// set the type of the timeline
	setType(type) {

		if (type == "default") {
			this.#contents.typeClass = "tl-type-default";
			this.#contents.type = type;
		}
		else if (type == "culture") {
			this.#contents.typeClass = "tl-type-culture";
			this.#contents.type = type;
		}
		else if (type == "bubbles") {
			this.#contents.typeClass = "tl-type-bubbles";
			this.#contents.type = type;
		}
		else {
			this.#contents.typeClass = "";
			this.#contents.type = "";
		}
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
		let html = ``;

		html = `<table class='tl-contents ${this.#contents.typeClass} ${this.#contents.customClass}'>`;
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
		html += `<tr class="tl-periods">`;
		html += `	<td></td>`; // same column with titles
		let milestonePosition = 0;
		for (let milestone of this.#contents.milestones) {
			if (milestone.period) {
				html += `<td class="tl-period" colspan="${milestone.period.milestones}"><div class="tl-period-contents">${milestone.period.text}</div></td>`;
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
		let upperTitle = this.#contents.upperTitle ?? "";
		html += `<tr class="tl-upperEvents">`;
		html += `	<td class="tl-upperTitle"><div class="tl-upperTitle-contents">${upperTitle}</div></td>`;
		for (let milestone of this.#contents.milestones) {
			html += `<td class="tl-milestone-upperEvents"><div class="tl-milestone-upperEvents-contents">`;
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
		html += `	<td></td>`;	 // same column with titles
		for (let milestone of this.#contents.milestones) {
			let customClass = milestone.customClass ?? '';
			html += `<td class="tl-milestone"><div class="tl-milestone-contents ${customClass}">${milestone.title}</div></td>`;
		}
		html += `</tr>`;


		// lower events
		let lowerTitle = this.#contents.lowerTitle ?? "";
		html += `<tr class="tl-lowerEvents">`;
		html += `	<td class="tl-lowerTitle"><div class="tl-lowerTitle-contents">${lowerTitle}</div></td>`;
		for (let milestone of this.#contents.milestones) {
			html += `<td class="tl-milestone-lowerEvents"><div class="tl-milestone-lowerEvents-contents">`;
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
		let customClass = event.customClass ?? '';
		let details = '';

		if (event.details) {
			customClass = ` tl-event-withDetails`;
			details = this.#eventDetailsHTML(event.details);
		}

		html += `<div class="tl-event ${customClass}">`;
		if (event.title)
			html += `	<div class="tl-event-title">${event.title}</div>`;
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