package com.yui.providers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yui.enums.ResponseMessage;
import com.yui.models.Feedback;
import com.yui.repositories.FeedbackRepository;

@RestController
public class FeedbackProvider {

    private final FeedbackRepository repo;

    @Autowired
    public FeedbackProvider(FeedbackRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/feedbacks")
    public ResponseEntity<List<Feedback>> retrieveAll() {
        return ResponseEntity.ok(repo.findAll());
    }

    @PostMapping("/feedback")
    public ResponseEntity<ResponseMessage> send(@RequestParam long id, @RequestBody Feedback feedback) {
        repo.save(feedback);
        return ResponseEntity.ok(ResponseMessage.SENT_FEEDBACK);
    }
    
}
