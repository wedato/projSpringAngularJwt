import { Component, OnInit } from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner/ngx";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  textToCode: string;
  myQrCode: string = null;

  constructor(private qrScanner: QRScanner) {
    this.scancode();
  }

  ngOnInit() {
  }

  createQRCode() {
    this.myQrCode = this.textToCode;
    this.textToCode = "";
  }

  scancode() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // permission cam autorisé

          // start scan
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // cache camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // permission cam refusé
          // utiliser QRScanner.openSettings() pour rediriger l'user vers ses options d'autorisations
        } else {
          // permission refuser , on pourra toujours redemander
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
