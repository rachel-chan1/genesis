from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    # display_name = models.CharField(max_length=50)
    carbon_footprint = models.FloatField(default=0.0)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __str__(self):
        return self.username
    
class CarbonFootprint(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    carbon_footprint = models.FloatField(default=0.0)
    carbon_percentage = models.FloatField(default=0.0)
    max = models.BooleanField(default=False)

    def update_footprint(self):
        self.carbon_footprint += 10
        self.user.carbon_footprint = self.carbon_footprint
        self.user.carbon_percentage = self.carbon_footprint / 100
        self.user.max = self.carbon_footprint >= 100
        self.user.save()
        return {self.carbon_footprint, self.carbon_percentage}