from django.db import models

class Company(models.Model):

    name = models.CharField(max_length=30)
    description = models.TextField()
    city = models.CharField(max_length=30)
    address = models.TextField()

    def company_to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):

    name = models.CharField(max_length=30)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, default=None)

    def vacancy_to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.company_to_json()
        }
