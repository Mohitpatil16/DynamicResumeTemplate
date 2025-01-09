const sections = document.querySelectorAll("#name, #title, #phone, #email, #address, #website, #skills, #languages, #profile, #work-experience, #education, #certifications, #achievements");

sections.forEach((section) => {
  section.addEventListener("click", () => {
    const content = prompt("Update content:", section.textContent);
    if (content !== null) {
      section.textContent = content;
    }
  });
});
