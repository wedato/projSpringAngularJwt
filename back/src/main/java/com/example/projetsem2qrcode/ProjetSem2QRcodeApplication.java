package com.example.projetsem2qrcode;

import com.example.projetsem2qrcode.dao.EtudiantRepository;
import com.example.projetsem2qrcode.modele.Etudiant;
import com.example.projetsem2qrcode.service.EtudiantService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProjetSem2QRcodeApplication {

    public static void main(String[] args) {

        SpringApplication.run(ProjetSem2QRcodeApplication.class, args);
    }

    @Bean
   CommandLineRunner start(EtudiantRepository etudiantRepository, EtudiantService etudiantService){
        return args -> {
            etudiantRepository.deleteAll();
            Etudiant etudiant = new Etudiant();
            etudiantRepository.save(etudiant);

            Etudiant etudiant1 = new Etudiant();
            etudiant1.setNumEtudiant("1");
            etudiantService.saveEtudiant(etudiant1);
        };
   }




}
