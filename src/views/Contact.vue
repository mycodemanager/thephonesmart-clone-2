<script setup lang="ts">
import { ref } from 'vue';

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Form submission status
const isSubmitting = ref(false);
const showSuccess = ref(false);
const errorMessage = ref('');

// Submit form
const submitForm = () => {
  isSubmitting.value = true;

  // Simulate API call with a timeout
  setTimeout(() => {
    // In a real application, you would make an API call here
    isSubmitting.value = false;
    showSuccess.value = true;

    // Reset form after submission
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // Hide success message after 3 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  }, 1000);
};
</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We're here to help with any questions or concerns you may have about our products or services.
            Fill out the form and we'll get back to you as soon as possible.
          </p>

          <div class="info-section">


            <div class="info-item">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <div class="info-text">
                <h4>Email</h4>
                <p>pakgizmo@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="info-section">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

        </div>

        <div class="contact-form">
          <h2>Send us a Message</h2>

          <!-- Success Message -->
          <div v-if="showSuccess" class="success-message">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="Your name">
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="formData.email" required placeholder="Your email address">
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" v-model="formData.subject" required placeholder="Message subject">
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" v-model="formData.message" required rows="5" placeholder="Your message"></textarea>
            </div>

            <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <h2>Visit Our Store</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <p>Map placeholder - In a real application, you would embed a Google Map or similar here.</p>
          </div>
        </div>
        <div class="address-info">
          <div class="address-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div class="address-text">
              <h4>Address</h4>
              <p>123 Main Street, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background-color: #f5f5f5;
  padding: 30px 0;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666;

    a {
      color: var(--accent-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.contact-info,
.contact-form {
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: var(--accent-color);
      margin-top: 10px;
    }
  }
}

.contact-info {
  p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: #555;
  }

  .info-section {
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 15px;

    .icon {
      width: 40px;
      height: 40px;
      background-color: rgba(38, 147, 228, 0.1);
      color: var(--accent-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info-text {
      h4 {
        font-size: 16px;
        margin-bottom: 5px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }

  .social-links {
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
    }

    .social-icons {
      display: flex;
      gap: 10px;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      background-color: #f5f5f5;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #555;
      transition: all 0.3s;

      &:hover {
        background-color: var(--accent-color);
        color: white;
      }
    }
  }
}

.contact-form {

  .success-message,
  .error-message {
    padding: 10px 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .success-message {
    background-color: rgba(0, 150, 0, 0.1);
    color: rgb(0, 120, 0);
  }

  .error-message {
    background-color: rgba(220, 0, 0, 0.1);
    color: rgb(180, 0, 0);
  }

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-family: 'Poppins', sans-serif;
      background-color: transparent;

      &:focus {
        outline: none;
        border-color: var(--accent-color);
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}

.map-section {
  margin-bottom: 60px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .map-container {
    height: 400px;
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;

    .map-placeholder {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #666;
      padding: 20px;
    }
  }

  .address-info {
    display: flex;
    justify-content: center;

    .address-item {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon {
        width: 40px;
        height: 40px;
        background-color: rgba(38, 147, 228, 0.1);
        color: var(--accent-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .address-text {
        h4 {
          font-size: 16px;
          margin-bottom: 5px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
