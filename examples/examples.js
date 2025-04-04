
// COMMENT: this file is only for test purposes and it just provides 
// some examples to check the graph. It is not needed to use the timeline.

var language = "GR";

window.onload = (event) => {

	// example 0
	var timelineElem0 = document.getElementById("timeline_example0");
	var timeline0 = new Timeline({ element: timelineElem0 });
	if (language == "GR")
		fillExample1GR(timeline0, "");
	else
		fillExample1EN(timeline0, "");

	// example 1
	var timelineElem1 = document.getElementById("timeline_example1");
	var timeline1 = new Timeline({ element: timelineElem1 });
	if (language == "GR")
		fillExample1GR(timeline1, "default");
	else
		fillExample1EN(timeline1, "default");

	// example 2
	var timelineElem2 = document.getElementById("timeline_example2");
	var timeline2 = new Timeline({ element: timelineElem2 });
	if (language == "GR")
		fillExample2GR(timeline2);
	else
		fillExample2EN(timeline2);

	// example 3
	var timelineElem3 = document.getElementById("timeline_example3");
	var timeline3 = new Timeline({ element: timelineElem3 });
	if (language == "GR")
		fillExample3GR(timeline3);
	else
		fillExample3EN(timeline3);

	document.body.addEventListener('click', function (event) {
		if (event.target.classList.contains('detailsViewer-close')) {
			event.stopPropagation();
			let detailsViewer = event.target.closest(".detailsViewer");
			detailsViewer.remove();
		}
	}, false);

}

function fillExample1GR(timeline, type) {

	timeline.setUpperTitle("Πολιτικά Γεγονότα");
	timeline.setLowerTitle("Τεχνολογικές Εξελίξεις");
	timeline.setType(type);

	timeline.addMilestone({
		title: "1914",
		events: [
			{ text: "Ξεκινά ο Α' Παγκόσμιος Πόλεμος", place: "up" },
			{ text: "Δολοφονία του αρχιδούκα Φραγκίσκου Φερδινάνδου", place: "up" },
			{ text: "Πρώτες δοκιμές ασύρματης επικοινωνίας μεγάλης εμβέλειας", place: "down" },
		],
		period: { text: "Περίοδος 1: Πρώιμος 20ός αιώνας (1914–1918)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1917",
		events: [
			{ text: "Ρωσική Επανάσταση", place: "up", },
			{ text: "Οι ΗΠΑ εισέρχονται στον Α' Παγκόσμιο Πόλεμο", place: "up" },
		],
	});
	timeline.addMilestone({
		title: "1939",
		events: [
			{ text: "Ξεκινά ο Β' Παγκόσμιος Πόλεμος", place: "up", distance: 60 },
		],
		period: { text: "Περίοδος 2: Μεσοπόλεμος και Β' Παγκόσμιος (1939–1945)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1945",
		events: [
			{ text: "Λήξη του Β' Παγκοσμίου Πολέμου", place: "up" },
			{ text: "Ίδρυση του Οργανισμού Ηνωμένων Εθνών", place: "up" },
			{ text: "Πρώτη πλήρης λειτουργία του ENIAC", place: "down" },
			{ text: "Πρώτη δοκιμή ατομικής βόμβας", place: "down", distance: 120 },
		]
	});
	timeline.addMilestone({
		title: "1961",
		events: [
			{ text: "Οικοδόμηση Τείχους Βερολίνου", place: "up" },
			{ text: "Πτήση του Γιούρι Γκαγκάριν (πρώτος άνθρωπος στο διάστημα)", place: "down" },
		],
		period: { text: "Περίοδος 3: Ψυχρός Πόλεμος και Αγώνας Τεχνολογίας (1960–1970)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1969",
		events: [
			{ text: "Κλιμάκωση Πολέμου στο Βιετνάμ", place: "up", distance: 60 },
			{ text: "Ίδρυση του ARPANET", place: "up" },
			{ text: "Αποστολή Apollo 11 και προσεδάφιση στη Σελήνη", place: "down" },
			{ text: "Δημιουργία του πρώτου λειτουργικού συστήματος UNIX", place: "down", distance: 60 },
		]
	});
	timeline.addMilestone({
		title: "1989",
		events: [
			{ text: "Πτώση του Τείχους του Βερολίνου", place: "up" },
			{ text: "Καταρρέουν κομμουνιστικά καθεστώτα σε Ανατολική Ευρώπη (Πολωνία, Ουγγαρία, κ.ά.)", place: "up" },
			{ text: "Δημιουργία του πρώτου web browser από τον Tim Berners-Lee", place: "down" },
			{ text: "Εισαγωγή της τεχνολογίας GPS για πολιτική χρήση", place: "down" },
		],
		period: { text: "Περίοδος 4: Κατάρρευση παλαιών καθεστώτων & Άνοδος της Πληροφορικής (1989–1991)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1991",
		events: [
			{ text: "Διάλυση της Σοβιετικής Ένωσης", place: "up" },
			{ text: "Τέλος του Ψυχρού Πολέμου", place: "up" },
			{ text: "Λειτουργία της πρώτης ιστοσελίδας", place: "up" },
			{ text: "Κυκλοφορία του Linux kernel από τον Linus Torvalds", place: "down" },
		]
	});

	timeline.draw();

}

function fillExample1EN(timeline, type) {

	timeline.setUpperTitle("Political Events");
	timeline.setLowerTitle("Technological Developments");
	timeline.setType(type);

	timeline.addMilestone({
		title: "1914",
		events: [
			{ text: "World War I begins", place: "up" },
			{ text: "Assassination of Archduke Franz Ferdinand", place: "up" },
			{ text: "First tests of long-range wireless communication", place: "down" },
		],
		period: { text: "Period 1: Early 20th century (1914–1918)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1917",
		events: [
			{ text: "Russian Revolution", place: "up", },
			{ text: "The United States enters World War I", place: "up" },
		]
	});
	timeline.addMilestone({
		title: "1939",
		events: [
			{ text: "World War II begins", place: "up", distance: 60 },
		],
		period: { text: "Period 2: Interwar and World War II (1939–1945)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1945",
		events: [
			{ text: "End of World War II", place: "up" },
			{ text: "Founding of the United Nations", place: "up" },
			{ text: "First full operation of ENIAC", place: "down" },
			{ text: "First atomic bomb test", place: "down", distance: 120 },
		]
	});
	timeline.addMilestone({
		title: "1961",
		events: [
			{ text: "Construction of the Berlin Wall", place: "up" },
			{ text: "Flight of Yuri Gagarin (first man in space)", place: "down" },
		],
		period: { text: "Period 3: Cold War and Technology Race (1960–1970)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1969",
		events: [
			{ text: "Escalation of the War in Vietnam", place: "up", distance: 60 },
			{ text: "Establishment of ARPANET", place: "up" },
			{ text: "Apollo 11 mission and moon landing", place: "down" },
			{ text: "Creation of the first UNIX operating system", place: "down", distance: 60 },
		]
	});
	timeline.addMilestone({
		title: "1989",
		events: [
			{ text: "Fall of the Berlin Wall", place: "up" },
			{ text: "Communist regimes in Eastern Europe (Poland, Hungary, etc.) are collapsing.", place: "up" },
			{ text: "Creation of the first web browser by Tim Berners-Lee", place: "down" },
			{ text: "Introduction of GPS technology for civilian use", place: "down" },
		],
		period: { text: "Period 4: Collapse of Old Regimes & Rise of Information Technology (1989–1991)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1991",
		events: [
			{ text: "Dissolution of the Soviet Union", place: "up" },
			{ text: "End of the Cold War", place: "up" },
			{ text: "Operation of the first website", place: "up" },
			{ text: "Release of the Linux kernel by Linus Torvalds", place: "down" },
		]
	});

	timeline.draw();

}

function fillExample2GR(timeline) {

	timeline.setUpperTitle("Καλλιτεχνικά & Πολιτιστικά Γεγονότα");
	timeline.setLowerTitle("Επιστημονικές Ανακαλύψεις");
	timeline.setType("culture");

	timeline.addMilestone({
		title: "1905",
		events: [
			{ text: "Ο Πάμπλο Πικάσο ξεκινά το καλλιτεχνικό ρεύμα του Κυβισμού", place: "up" },
			{ text: "Ο Άλμπερτ Αϊνστάιν δημοσιεύει τη Θεωρία της Ειδικής Σχετικότητας", place: "down" },
		],
		period: { text: "Περίοδος 1: Πρώιμος Μοντερνισμός (1900–1920)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1913",
		events: [
			{ text: "Πρεμιέρα του Η Ιεροτελεστία της Άνοιξης του Στραβίνσκι (προκαλεί σάλο)", place: "up", },
			{ text: "Ίδρυση της Έκθεσης Armory Show στη Νέα Υόρκη (είσοδος μοντέρνας τέχνης στις ΗΠΑ)", place: "up" },
		],
	});
	timeline.addMilestone({
		title: "1927",
		events: [
			{ text: 'Πρώτη ομιλούσα ταινία (The Jazz Singer) – αρχή του ηχητικού κινηματογράφου', place: "up" },
			{ text: 'Άνοδος του Σουρεαλισμού (Νταλί, Μπρετόν)', place: "up" },
			{ text: 'Διατύπωση της Αρχής της Απροσδιοριστίας από τον Heisenberg', place: "down" },
			{ text: 'Ανακάλυψη του νετρονίου από τον Chadwick (1932)', place: "down" },
		],
		period: {
			text: "Περίοδος 2: Μεσοπόλεμος (1920–1939)", milestones: 1
		}
	});
	timeline.addMilestone({
		title: "1948",
		events: [
			{ text: "Γέννηση του Αφηρημένου Εξπρεσιονισμού (Πόλοκ, Ρόθκο στη Νέα Υόρκη)", place: "up" },
			{ text: "Καθιέρωση της Θεωρίας της Μεγάλης Έκρηξης (Big Bang)", place: "down" },
		],
		period: { text: "Περίοδος 3: Μεταπολεμική Εποχή & Νέα Παραδείγματα (1945–1965)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1953",
		events: [
			{ text: "Πρεμιέρα του Περιμένοντας τον Γκοντό του Μπέκετ", place: "up" },
			{ text: "Ανακάλυψη της διπλής έλικας του DNA (Watson & Crick)", place: "down" },
		]
	});
	timeline.addMilestone({
		title: "1969",
		events: [
			{ text: "Το Φεστιβάλ του Woodstock ορίζει τη γενιά της αντικουλτούρας", place: "up" },
			{ text: "Η ταινία 2001: Η Οδύσσεια του Διαστήματος του Κιούμπρικ αλλάζει τα δεδομένα του σινεμά", place: "up" },
			{ text: "Η προσελήνωση του Apollo 11 αποδεικνύει την εφικτότητα της διαστημικής εξερεύνησης", place: "down" },
			{ text: "Εφεύρεση του ARPANET (πρόδρομος του Διαδικτύου)", place: "down" },
		],
		period: { text: "Περίοδος 4: Αντικουλτούρα & Επιστημονική Έκρηξη (1965–1980)", milestones: 1 }
	});
	timeline.addMilestone({
		title: "1984",
		events: [
			{ text: "Η διάσημη διαφήμιση '1984' της Apple – η τεχνολογία γίνεται πολιτισμός", place: "up" },
			{ text: "Πραγματοποίηση του πρώτου συνεδρίου TED (Technology, Entertainment, Design)", place: "up" },
			{ text: "Ανάπτυξη της τεχνικής γενετικού αποτυπώματος (DNA fingerprinting – Jeffreys)", place: "up" },
			{ text: "Ίδρυση του Ινστιτούτου SETI για αναζήτηση εξωγήινης ζωής", place: "down" },
		],
		period: { text: "Περίοδος 5: Η Ψηφιακή Εποχή Αναδύεται (1980–2000)", milestones: 1 }
	});

	timeline.draw();

}

function fillExample2EN(timeline) {

	timeline.setUpperTitle("Art & Culture Events");
	timeline.setLowerTitle("Scientific Discoveries");
	timeline.setType("culture");

	timeline.addMilestone({
		title: "1905",
		events: [
			{ text: "Pablo Picasso begins the Cubism movement", place: "up" },
			{ text: "Albert Einstein publishes the Theory of Special Relativity", place: "down" },
		],
		period: { text: "Period 1: Early Modernism (1900–1920)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1913",
		events: [
			{ text: "Premiere of Stravinsky's The Rite of Spring (causes public uproar)", place: "up", },
			{ text: "Founding of the Armory Show in New York (modern art enters U.S.)", place: "up" },
		],
	});
	timeline.addMilestone({
		title: "1927",
		events: [
			{ text: 'First "talkie" movie (The Jazz Singer) marks start of sound cinema', place: "up" },
			{ text: 'Surrealism rises with Salvador Dalí and André Breton', place: "up" },
			{ text: 'Heisenberg formulates the Uncertainty Principle', place: "down" },
			{ text: 'Discovery of the neutron (Chadwick, 1932)', place: "down" },
		],
		period: { text: "Period 2: Between the Wars (1920–1939)", milestones: 1 }
	});
	timeline.addMilestone({
		title: "1948",
		events: [
			{ text: "Birth of Abstract Expressionism (Pollock, Rothko in NYC)", place: "up" },
			{
				text: "Development of the Big Bang Theory as dominant cosmological model", place: "down"
			},
		],
		period: { text: "Period 3: Post-War & New Paradigms (1945–1965)", milestones: 2 }
	});
	timeline.addMilestone({
		title: "1953",
		events: [
			{ text: "Samuel Beckett's Waiting for Godot premieres", place: "up" },
			{ text: "Discovery of DNA’s double helix structure (Watson & Crick)", place: "down" },
		]
	});
	timeline.addMilestone({
		title: "1969",
		events: [
			{ text: "Woodstock Festival defines counterculture generation", place: "up" },
			{ text: "Stanley Kubrick’s 2001: A Space Odyssey sets new standard in film", place: "up" },
			{ text: "Moon landing validates space travel capabilities", place: "down" },
			{ text: "Invention of ARPANET (precursor to the Internet)", place: "down" },
		],
		period: { text: "Period 4: Counterculture & Scientific Expansion (1965–1980)", milestones: 1 }
	});
	timeline.addMilestone({
		title: "1984",
		events: [
			{ text: "Premiere of Macintosh's '1984' ad – culture meets tech", place: "up" },
			{ text: "First TED Conference (Technology, Entertainment, Design)", place: "up" },
			{ text: "DNA fingerprinting developed (Jeffreys)", place: "up" },
			{ text: "SETI Institute founded for extraterrestrial research", place: "down" },
		],
		period: { text: "Period 5: Digital Age Emerges (1980–2000)", milestones: 1 }
	});

	timeline.draw();

}

function fillExample3GR(timeline) {

	timeline.setType("bubbles");

	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1905", place: "up" },
			{ text: "Ο Άλμπερτ Αϊνστάιν δημοσιεύει τη Θεωρία της Ειδικής Σχετικότητας", place: "down", title: "Φυσική" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: '1927', place: "down" },
			{
				text: 'Ανακάλυψη του νετρονίου από τον Chadwick (1932)', place: "up", title: "Φυσική",
				details: {
					title: 'Ανακάλυψη του νετρονίου από τον Chadwick: σημασία της ανακάλυψης',
					text: '<p>Εξηγούσε τη μάζα των ατόμων – Το νετρόνιο ήταν το "χαμένο κομμάτι" που έκανε τους υπολογισμούς της ατομικής μάζας να ταιριάζουν.</p><p>Οδήγησε στην ανακάλυψη της πυρηνικής σχάσης – Το 1938, η Lise Meitner και ο Otto Hahn έδειξαν ότι το ουράνιο μπορεί να διασπαστεί με νετρόνια, κάτι που άνοιξε τον δρόμο για την ατομική ενέργεια και τις πυρηνικές βόμβες.</p><p>Βοήθησε στην ανάπτυξη της κβαντικής φυσικής και της πυρηνικής φυσικής, καθώς έδειξε ότι ο πυρήνας του ατόμου αποτελείται όχι μόνο από πρωτόνια αλλά και από νετρόνια.</p>',
				}
			},
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1948", place: "up" },
			{ text: "Καθιέρωση της Θεωρίας της Μεγάλης Έκρηξης (Big Bang)", place: "down", title: "Αστροφυσική" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1953", place: "down" },
			{ text: "Ανακάλυψη της διπλής έλικας του DNA (Watson & Crick)", place: "up", title: "Βιολογία" },
		]
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1969", place: "up" },
			{ text: "Εφεύρεση του ARPANET (πρόδρομος του Διαδικτύου)", place: "down", title: "Τεχνολογία" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1984", place: "down" },
			{ text: "Ίδρυση του Ινστιτούτου SETI για αναζήτηση εξωγήινης ζωής", place: "up", title: "Αστροφυσική" },
		],
	});

	timeline.draw();

}

function fillExample3EN(timeline) {

	timeline.setType("bubbles");

	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1905", place: "up" },
			{ text: "Albert Einstein publishes the Theory of Special Relativity", place: "down", title: "Physics" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: '1927', place: "down" },
			{ text: 'Discovery of the neutron by Chadwick (1932)', place: "up", title: "Physics" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1948", place: "up" },
			{ text: "Establishment of the Big Bang Theory", place: "down", title: "Astrophysics" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1953", place: "down" },
			{ text: "Discovery of the DNA double helix (Watson & Crick)", place: "up", title: "Biology" },
		]
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1969", place: "up" },
			{ text: "Invention of ARPANET (precursor to the Internet)", place: "down", title: "Technology" },
		],
	});
	timeline.addMilestone({
		title: "",
		events: [
			{ text: "1984", place: "down" },
			{ text: "Establishment of the SETI Institute to search for extraterrestrial life", place: "up", title: "Astrophysics" },
		],
	});

	timeline.draw();

}

