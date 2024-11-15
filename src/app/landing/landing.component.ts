import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  
})
export class LandingComponent {
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Pages', href: '#' },
    { label: 'Insurance', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  heroContent = {
    title: 'Secure Your Future with Comprehensive Insurance Plans',
    subtitle: 'We provide the best insurance policies tailored to meet your needs.',
    buttonText1: 'Get Started',
    buttonText2: 'Learn More',
    imageUrl: 'https://media.istockphoto.com/id/691524194/photo/family-having-fun-at-home.jpg?s=612x612&w=0&k=20&c=jn3iQ4oKsfl4RgzxGuSF_iX9LehtyfdS9aD5gcq-TXU='
  };

  features = [
    {
      title: 'Money Back Guarantee',
      description: 'Get peace of mind with our 100% satisfaction guarantee.',
    
    },
    {
      title: '24/7 Support',
      description: 'Our team is here to support you anytime, anywhere.',
      
    },
    {
      title: 'Digital Policy Management',
      description: 'Easily manage your policies through our digital platform.',
      
    },
    {
      title: 'Direct Payments',
      description: 'Receive and make payments seamlessly and securely.',
      
    }
  ];

  featureDetails = [
    {
      title: 'Trusted By Thousand',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.',
     
    },
    {
      title: 'Set For Life',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.',
      
    },
    {
      title: 'Protective Insurance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed sit amet, consectetur adipiscing.',
       
    }
  ];

  featureImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6hkiJ0Bb_Q78223yfSEFksz45xSeeF6yDQ&s', 
    'https://st.depositphotos.com/1011643/4430/i/450/depositphotos_44308871-stock-photo-young-indian-family-bird-watching.jpg',
    
  ];

  footerContent = {
    location: 'Hitech city,Hyderabad',
    contact: '+1 234 567 890',
    email: 'contact@insurance.com'
  };
}
