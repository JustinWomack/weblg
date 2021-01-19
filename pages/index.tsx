import React, { FunctionComponent } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Divider, SvgIcon, ButtonBase, Button, Grid } from '@material-ui/core';
import Navbar from '../components/features/navbar';
import ParticleHero from '../components/features/particlehero';
import Bio from '../components/features/bio';
import Skillset from '../components/features/skillset';
import Slideshow from '../components/features/slideshow';
import Bulletin from '../components/features/bulletin';
import BulletinBoard from '../components/features/bulletinBoard';
import ContactDialog from '../components/features/contactDialog';
import Footer from '../components/features/footer';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: 600,
            width: '100%',
            position: 'absolute',
            top: 0,
            zIndex: -51,
        },
        partContainer: {
            position: 'relative',
            height: 600,
            width: '100%',
            overflow: 'hidden'
        }
    });

interface Props extends WithStyles<typeof styles> {
    classes: any;
}

const initialState = {
    open: false,
};

const Page: FunctionComponent<Props> = (props: Props) => {
    const { classes } = props;

    return(
      <div>
        <Navbar />
        <ParticleHero />
        <Slideshow >
          <Bio />
          <Skillset />
        </ Slideshow>
        <ContactDialog />
        <div style={{margin: 28}}>
          <BulletinBoard title='Personal Projects' subtitle='While most of my work is internal, here are some personal projects' cellHeight={120} cols={10} spacing={24}>
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Battle Brothers Perk Calculator at Tumult'
              description='A web tool for the game "Battle Brothers" built with jquery and bootstrap. The site features a responsive design for mobile, saving using local storage, and multi-language support. It is pinned on the official Steam community, featured on the official wiki, and is the go-to tool for sharing on reddit.'
              href='https://tumult.cc/bb-calc.html?1-8&3-3&2-6&3-4&5-4&6-4&7-4&4-3&7-1&2-5'
              mediaUrl='/bg_orc.jpg'
              enableOverlay={true}
            />
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Tricia Mihal LCSW'
              description='One of the first projects I created at Austin Coding Academy, this site features a JQuery and bootstrap frontend, responsive design, and parallax scrolling.'
              href='http://triciamihallcsw.com/'
              mediaUrl='/bluesky.jpg'
              enableOverlay={true}
            />
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='About This Site...'
              description='The site you are viewing features a react and redux frontend rendered server-side with next.js. The interface is Material-UI with custom theme and elements.'
              mediaUrl='/code-2.jpg'
              enableOverlay={true}
            />
          </BulletinBoard>

          <Divider style={{marginTop: 28, marginBottom: 28}}/>

          <BulletinBoard title='Certifications' cellHeight={120} cols={10} spacing={24}>
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Reactive Architecture: Reactive Microservices'
              description='Click to view this certificate'
              href='https://academy.lightbend.com/certificates/db835e960a264c068f6ae5e0550866e7'
              mediaUrl='/lightbend-orange.jpg'
              enableOverlay={true}
            />
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Reactive Architecture: Domain Driven Design'
              description='Click to view this certificate'
              href='https://academy.lightbend.com/certificates/4194d9e4b05042589f61768815a9e867'
              mediaUrl='/lightbend-orange.jpg'
              enableOverlay={true}
            />
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Reactive Architecture: Distributed Messaging Patterns'
              href='https://academy.lightbend.com/certificates/d4ddb8bd5c884160a65f30977fb6b8d4'
              description='Click to view this certificate'
              mediaUrl='/lightbend-orange.jpg'
              enableOverlay={true}
            />
            <Bulletin
              xl={2}
              lg={3}
              md={5}
              sm={10}
              title='Reactive Architecture: Building Scalable Systems'
              description='Click to view this certificate'
              href='https://academy.lightbend.com/certificates/3a600696f7c345398f1a5430700a2ae1'
              mediaUrl='/lightbend-orange.jpg'
              enableOverlay={true}
            />
          </BulletinBoard>
        </div>
        <Footer />
      </div>
    )
}

export default withStyles(styles)(Page);
