package com.yui.providers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.yui.enums.ResponseMessage;
import com.yui.models.Artwork;
import com.yui.repositories.ArtworkRepository;

@RestController
public class ArtworkProvider {

    @Value("${CLOUDINARY_CLOUD_NAME}")
    private String cloudName;

    @Value("${CLOUDINARY_API_KEY}")
    private String apiKey;

    @Value("${CLOUDINARY_API_SECRET}")
    private String apiSecret;

    private final ArtworkRepository repo;

    @Autowired
    public ArtworkProvider(ArtworkRepository repo) {
        this.repo = repo;
    }
    
    @GetMapping("/artworks")
    public List<Artwork> retrieveAll() {
        return repo.findAll();
    }

    public ResponseEntity<ResponseMessage> upload() {
        var cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", cloudName,
            "api_key", apiKey,
            "api_secret", apiSecret));
        try {
            cloudinary.uploader().upload("this", ObjectUtils.asMap("", ""));
            return ResponseEntity.ok(ResponseMessage.SUCCESS);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(ResponseMessage.FAILED_TO_UPLOAD);
        }
    }
}
