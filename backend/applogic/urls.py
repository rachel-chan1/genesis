from django.urls import path

from applogic.views import UserView, CarbonFootprintView, TransactionView

urlpatterns = [
    path("api/user", UserView.as_view(), name="user"),
    path("api/carbonfootprint", CarbonFootprintView.as_view(), name="carbonfootprint"),
    path("api/transaction", TransactionView.as_view(), name="transaction"),
]
