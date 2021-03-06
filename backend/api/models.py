from django.db import models
from django.utils import timezone

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=120)
    details = models.TextField()
    date_created = models.DateTimeField(default = timezone.now)

    def __str__(self):
        return 'Title: {},  Create Date: {}'.format(self.title, self.date_created)