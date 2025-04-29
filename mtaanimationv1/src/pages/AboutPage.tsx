import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Film, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="About Mtaanimation" 
          subtitle="Learn about our journey, mission, and the creative minds behind our animated stories." 
        />
        
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Mtaanimation was founded in 2022 by Fredrick Lani, an award-winning animator with a passion for storytelling and a vision to create meaningful animated content that resonates with audiences of all ages.
              </p>
              <p>
                What began as a small independent project quickly grew into a collaborative studio of talented artists, writers, and animators united by a shared commitment to creating visually stunning and emotionally impactful stories.
              </p>
              <p>
                Our journey hasn't been without challenges, but each obstacle has only strengthened our resolve and pushed us to refine our craft. Today, Mtaanimation stands as a testament to the power of creativity, perseverance, and the magic that happens when passionate individuals come together with a common purpose.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4255359/pexels-photo-4255359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mtaanimation Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-900 dark:text-white font-medium italic">
                "Animation offers a medium of storytelling and visual entertainment which can bring pleasure and information to people of all ages everywhere in the world."
              </p>
              <p className="text-right mt-2 text-purple-600 dark:text-purple-400 font-semibold">
                — Fredrick Lani
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-20 shadow-md">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              At Mtaanimation, we're guided by core principles that drive everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in every frame, pushing the boundaries of what's possible in animation while maintaining the highest standards of artistic quality.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inclusivity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in creating stories that represent diverse perspectives and experiences, ensuring our content is accessible and relatable to viewers from all backgrounds.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Film className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Storytelling</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  At our core, we are storytellers. We craft narratives that entertain while also imparting meaningful messages and fostering emotional connections.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We embrace technological advancements and creative experimentation, constantly evolving our techniques to create fresh and engaging animated experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* About The Creator */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Founder</h2>
          
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="h-full">
                  <img 
                    src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Fredrick Lani" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fredrick Lani</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Founder & Creative Director</p>
                
                <div className="prose prose-lg dark:prose-invert mb-6">
                  <p>
                    With over 15 years of experience in animation and storytelling, Fredrick has worked with major studios before founding Mtaanimation to pursue his unique creative vision.
                  </p>
                  <p>
                    A graduate of the prestigious Animation Institute, his work has received critical acclaim and multiple industry awards. Fredrick's distinctive style combines traditional animation techniques with cutting-edge technology, resulting in visually stunning and emotionally resonant stories.
                  </p>
                  <p>
                    When not in the studio, Fredrick mentors young animators and speaks at animation conferences around the world. His greatest joy is seeing how Mtaanimation's stories inspire creativity and imagination in viewers of all ages.
                  </p>
                </div>
                
                <div className="mt-6">
                  <Link to="/contact">
                    <Button>Contact Fredrick</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center pb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Us on Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We're just getting started, and we're excited to have you along for the adventure. Check out our latest episodes and see what we've been creating.
          </p>
          <Link to="/episodes">
            <Button size="lg">
              Watch Our Episodes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;