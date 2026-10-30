import fitCoachTexture from '~/assets/FitCoachFoto.png';
import fitCoachDentro from '~/assets/FitCoachDentro.png';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

const title = 'FitCoach';
const description = 'Plataforma de Tracking Deportivo y Gestión de Clientes';
const roles = ['Angular', 'Supabase', 'PostgreSQL', 'TypeScript', 'RxJS'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FitCoach = () => {
  return (
    <Fragment>
      <ProjectContainer className="fitcoach-project">
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          url="https://fitcoach-gamma.vercel.app/"
        />
        <ProjectSection padding="top">
          <ProjectSectionColumns>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Desarrollé una aplicación Full-Stack para la gestión de clientes y seguimiento de entrenamientos de fuerza, construyendo un frontend reactivo y modularizado con Angular.
                <br /><br />
                <strong>Credenciales de demostración:</strong><br /><br />
                <em>Entrenador (Coach)</em><br />
                Email: <code>demo@fitcoach.app</code><br />
                Contraseña: <code>FitCoachDemo123!</code><br />
                Propósito: Ver panel de métricas, alumnos vinculados y biblioteca de rutinas<br /><br />
                <em>Alumno (Client)</em><br />
                Email: <code>cliente.demo@fitcoach.app</code><br />
                Contraseña: <code>FitCoachDemo123!</code><br />
                Propósito: Ver la app en modo entrenamiento, gamificación, progreso y rutinas
              </ProjectSectionText>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProjectImage
                srcSet={`${fitCoachTexture} 375w, ${fitCoachTexture} 750w`}
                width={375}
                height={800}
                placeholder={fitCoachTexture}
                alt="FitCoach App Screenshot"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Arquitectura y Base de Datos</ProjectSectionHeading>
              <ProjectSectionText>
                Diseñé la arquitectura relacional del backend en Supabase, escribiendo migraciones SQL personalizadas para garantizar la integridad de los datos de los atletas y sus métricas de sobrecarga progresiva.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ProjectSectionHeading>Gestión de Estado y Flujos</ProjectSectionHeading>
              <ProjectSectionText>
                Implementé la lógica de estado (Store) mediante RxJS y flujos automatizados para la asignación de rutinas, reduciendo la carga administrativa de los entrenadores y mejorando la visualización del progreso en tiempo real.
              </ProjectSectionText>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProjectImage
                srcSet={`${fitCoachDentro} 375w, ${fitCoachDentro} 750w`}
                width={375}
                height={800}
                placeholder={fitCoachDentro}
                alt="FitCoach App Inside"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
