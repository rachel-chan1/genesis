from django.urls import path

from .views import UserView, CarbonFootprintView, TransactionView

urlpatterns = [
    path("api/user", UserView.as_view(), name="user"),
    path("api/user/add", UserView.as_view({'post': 'add'}), name="user_add"),
    path("api/user/login", UserView.as_view({'post': 'login'}), name="user_login"),
    path("api/user/signup", UserView.as_view({'post': 'signup'}), name="user_signup"),
    path("api/carbonfootprint", CarbonFootprintView.as_view(), name="carbonfootprint"),
    path("api/transaction", TransactionView.as_view(), name="transaction"),
]
