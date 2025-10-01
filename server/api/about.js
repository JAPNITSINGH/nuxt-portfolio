import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: ' I am a Software Engineer with over 4 years of experience, primarily focused\
         on backend development, cloud computing, and DevOps. I recently completed a\
         Master’s in Computer Science to further strengthen my technical foundation.\
         I enjoy building scalable, reliable systems that address real-world challenges,\
         and I thrive in collaborative, fast-paced environments. Throughout my career,\
         I have led cross-functional teams, designed and implemented complex architectures,\
         and deployed cloud-native solutions on AWS. My core expertise includes Java,\
         Spring Boot,and CI/CD pipelines, with a strong emphasis on automation, clean\
         code, and continuous improvement. I am passionate about delivering high-quality\
         software and contributing to products that make a meaningful impact.'
      },
    },
  ]
})
