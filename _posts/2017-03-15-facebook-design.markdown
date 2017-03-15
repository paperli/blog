---
layout: post
title:  "Welcome to Jekyll!"
date:   2017-03-15 11:04:13 +0800
categories: jekyll update
---
# Designing Facebook for Mobile VR
`Gabriel Valdivia, Design at Facebook`

> Lessons from the making of the Facebook 360 app for GearVR

The mission of the Facebook Immersive Design team is to enable people to experience moments as if they were there. We believe the ability to tell and experience stories unbounded by a rectangular 'frame' allows people to 
connect more deeply with them and ultimately each other.

We've built support for 360 photos and videos on all platforms and, shortly after introducing 360 Photos, we noticed a rapid increase in 360 content being created on Facebook. However, there was one problem: people didn't have a good way to find the best and most relevant content available in VR. Although Facebook hosts a lot of great VR content, it's often lost within News Feed and hard to access when you have a headset ready.

## Introducing Facebook 360
For the past few months, I've been working on a home for immersive media on Facebook, and we call it Facebook 360. It will be the first dedicated Facebook media app for the GearVR platform.

Facebook 360 is a one-stop shop for catching up on what you may have missed from your friends and pages you follow, immersing yourself in the 360 photos and videos you've saved while finding something new to enjoy.

The app features four sections:

*Explore:* The most interesting and popular 360 stories on Facebook from media companies, organizations, and individual creators.

*Following:* 360 stories from friends and Pages you follow on Facebook.

*Saved:* 360 content you save from News Feed on mobile and desktop right in the app, ready for you to enjoy at a more convenient time.

*Timeline:* Your memories ready to be relived in a new way through the 360 photo and videos you've shared.

We focused on creating an experience that is comfortable and delightful for GearVR users and providing a coherent experience with people's traditional Facebook usage. 

We ran weekly user research sessions with participants of different backgrounds to validate our assumptions along the way.

The following are a few design considerations that informed the making of the Facebook 360 app:

## Facebook as a Destination
When designing Facebook for Mobile VR, it became clear that the context of use for Facebook is very different in VR. Mobile users are likely to visit Facebook many times a day, like while waiting in line at the DMV for example. We believe VR is more of a destination that works symbiotically with the Facebook mobile app.

We often heard that even though 360 content is delightful to consume, it's inconvenient to move your phone around to interact with it, especially in a public setting. To address this, we added the ability to access your Saved stories from within Facebook 360. This allows people to save 360 content for later as they encounter it on News Feed, then access it within Facebook 360 when it's most convenient for them. By doing this, folks can set aside time throughout their week to catch up with the latest VR content available.

## Exploring New Territory
Once inside Facebook 360, our goal was to provide users with enough content to keep them engaged for at least 3o minutes once a week. However, one big challenge is that folks don't yet follow friends or pages that create enough VR content. Relying on the traditional one-News-Feed-to-rule-them-all approach became challenging with such low connected inventory.

We set out to address this by introducing an Explore feed, which highlights the best and most popular 360 photos and videos on the platform. Facebook 360 users can visit this feed to discover great VR content creators and follow them to build up their Following feed over time.

## Passive Immersion
Through user testing, we learned that most GearVR owners don't use VR standing up or in a swivel chair. Instead, they use VR while sitting in a couch or in bed and find constant interaction with the headset's touchpad to be tiring. This informed a lot of our design decisions for navigation and interactions in Facebook 360.

## Lean Back
We noticed most apps require users to constantly jump between a grid and a piece of content. This seemed like a big friction point for users, especially given the ergonomic challenges of the GearVR touchpad.

To address this, we made the decision to automatically transition you to the next photo or video after viewing the current one without having to go back to the grid. The result is a seamless, story-likeslideshow of content that allows users to lean back and immerse themselves in the content without having to constantly jump back to a grid to make another selection.

From the grid, users can tap any story to dive into a slideshow of one of the four sections in the feed — Discover, Following, Saved, or Timeline. If they see something they like, they simply tap and hold anywhere to leave a reaction or tap to bring up more information about that story.

## Optimizing for Sloppyness
We put a lot of effort into designing gaze-based interactions that were comfortable to use and required interacting with the touchpad only when necessary. For example, the retide design allows the user to be less precise with their head movements by snapping to interactable UI elements. This seemingly small detail presented an opportunity to make gaze-based interactions less effortful and allowed people to do the Minimum Viable Input™ to complete a task.

## Put It On Your Face
We were fortunate enough to validate our assumptions along the way by involving folks from all levels of expertise to participate in user research as we made progress in the app. We invited participants every Friday to test mental models, comfort zones, information architecture, and other interactions with people who'd never used VR before, as well as VR experts.

We learned that prototyping is an integral part of developing a product in VR: what often seems obvious in 2D is far more complex when experienced in headset. Through the development of this app, we ramped up our ability to quickly prototype rough ideas in Unity and test them out in headset. Finally, we built an end-to-end prototype in Unity that used sample data to convey the intended look and feel and interactions for the final app. This was instrumental for engineers to have a 'North Star' as they implemented the production app.

> Our hope is that, by being the best way to consume 360 photos and videos for an extended viewing session, people will find more 360 sources in headset and be motivated to produce and curate more 360 media across all surfaces.
