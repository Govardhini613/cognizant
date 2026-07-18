package com.cognizant.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;
    public List<Country> searchCountry(String text) {
    return countryRepository.searchCountry(text);
}
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

     public Country getCountry(String code) {
    return countryRepository.getCountry(code);
}
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    public List<Country> searchCountries(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }
}