// JavaScript for the job portal website

// Initialize tooltips everywhere
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle location search in recruiters page if present
    const locationForm = document.getElementById('location-search-form');
    if (locationForm) {
        locationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, this would search for candidates in the specified location
            // For now, we'll just show an alert
            alert('This feature would search for candidates in the specified location. Currently, this is just a frontend demo.');
        });
    }

    // Handle job seeker profile submission if present
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, this would submit the profile data
            // For now, we'll just show an alert
            alert('Profile submission successful! (This is just a frontend demo)');
            profileForm.reset();
        });
    }

    // Handle contact form submission if present
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, this would submit the contact data
            // For now, we'll just show an alert
            alert('Message sent successfully! (This is just a frontend demo)');
            contactForm.reset();
        });
    }

    // Handle job post form submission if present
    const jobPostForm = document.getElementById('job-post-form');
    if (jobPostForm) {
        jobPostForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, this would submit the job posting
            // For now, we'll just show an alert
            alert('Job posted successfully! (This is just a frontend demo)');
            jobPostForm.reset();
        });
    }

    // Handle company profile form submission if present
    const companyProfileForm = document.getElementById('company-profile-form');
    if (companyProfileForm) {
        companyProfileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, this would submit the company profile
            // For now, we'll just show an alert
            alert('Company profile created successfully! (This is just a frontend demo)');
            companyProfileForm.reset();
        });
    }
});