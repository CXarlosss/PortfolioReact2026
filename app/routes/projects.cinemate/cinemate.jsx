import cinemateTexture from '~/assets/Cinemate.png';
import cinemateTexture2 from '~/assets/Cinemate2.png';
import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

const title = 'Cinemate';
const description = 'Aplicación para explorar películas en cartelera y obtener información desde la API de TMDb.';
const roles = ['React', 'Node.js', 'Express', 'API Integration'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Cinemate = () => {
  return (
    <Fragment>
      <ProjectContainer className="cinemate-project">
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          url="https://chimerical-platypus-822400.netlify.app/"
        />
        <ProjectSection padding="top">
          <ProjectSectionColumns>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Cinemate (Cinema Hub) es una plataforma de exploración de películas que utiliza la API de TMDb (The Movie Database) para consumir datos en tiempo real sobre carteleras, puntuaciones y trailers.
                <br /><br />
                Permite a los usuarios filtrar por género, buscar películas específicas y guardar sus favoritas para verlas más tarde.
              </ProjectSectionText>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProjectImage
                srcSet={`${cinemateTexture} 800w, ${cinemateTexture} 1920w`}
                width={800}
                height={500}
                placeholder={cinemateTexture}
                alt="Cinemate Application Screenshot"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
              <ProjectImage
                srcSet={`${cinemateTexture2} 800w, ${cinemateTexture2} 1920w`}
                width={800}
                height={500}
                placeholder={cinemateTexture2}
                alt="Cinemate Details View"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 2 }}>
              <ProjectSectionHeading>Arquitectura Full-Stack</ProjectSectionHeading>
              <ProjectSectionText>
                El frontend está construido íntegramente con React, asegurando una experiencia de usuario rápida y dinámica gracias a su renderizado en el cliente (SPA).
                <br /><br />
                El backend fue desarrollado con Node.js y Express, actuando como intermediario para procesar peticiones a la API externa de películas, manejar la lógica de datos y optimizar el rendimiento de la plataforma para entregar una navegación muy rápida.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
